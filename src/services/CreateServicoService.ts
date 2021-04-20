import { getRepository } from 'typeorm';

import Servico from '../models/Servico';
import tipoServico from '../enums/tipoServico';

interface Request {
	titulo: string;
	descricao: string;
	tipo_servico: tipoServico;
	fotos: string;
	telefone: string;
}

class CreateServicoService {
	public async execute({
		titulo,
		descricao,
		tipo_servico,
		fotos,
		telefone,
	}: Request): Promise<Servico> {
		const servicosRepository = getRepository(Servico);

		const servico = servicosRepository.create({
			titulo,
			descricao,
			tipo_servico,
			fotos,
			telefone,
		});

		await servicosRepository.save(servico);

		return servico;
	}
}

export default CreateServicoService;
