import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';
import tipoServico from '../enums/tipoServico';

@Entity('servicos')
class Servico {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	titulo: string;

	@Column()
	descricao: string;

	@Column({
		type: 'enum',
		enum: tipoServico,
	})
	tipo_servico: tipoServico;

	@Column()
	fotos: string;

	@Column()
	telefone: string;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;
}

export default Servico;
