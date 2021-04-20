import Router from 'express';
import multer from 'multer';
import { getRepository } from 'typeorm';
import uploadConfig from '../config/upload';
import Servico from '../models/Servico';
import CreateServicoService from '../services/CreateServicoService';

const servicosRouter = Router();
const upload = multer(uploadConfig);

servicosRouter.post('/', upload.single('fotos'), async (request, response) => {
	const { titulo, descricao, tipo_servico, telefone } = request.body;

	const createServico = new CreateServicoService();

	const servico = await createServico.execute({
		titulo,
		descricao,
		tipo_servico,
		fotos: request.file.filename,
		telefone,
	});

	return response.json(servico);
});

servicosRouter.get('/', async (request, response) => {
	const servicosRepository = getRepository(Servico);
	const servicos = await servicosRepository.find();

	return response.json(servicos);
});

servicosRouter.get('/:id', async (request, response) => {
	const { id } = request.params;

	const servicosRepository = getRepository(Servico);
	const servico = servicosRepository.findOne(id);

	return response.json(servico);
});

servicosRouter.delete('/:id', async (request, response) => {
	const { id } = request.params;

	const servicosRepository = getRepository(Servico);
	servicosRepository.delete(id);

	return response.status(204).send({});
});

servicosRouter.put(
	'/:id',
	upload.single('fotos'),
	async (request, response) => {
		const { id } = request.params;
		const { titulo, descricao, tipo_servico, telefone } = request.body;

		const servicosRepository = getRepository(Servico);

		await servicosRepository.update(id, {
			titulo,
			descricao,
			tipo_servico,
			fotos: request.file.filename,
			telefone,
		});

		const servico = await servicosRepository.findOne(id);

		return response.json(servico);
	},
);

export default servicosRouter;
