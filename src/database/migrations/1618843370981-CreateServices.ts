import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateServices1618843370981 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'servicos',
				columns: [
					{
						name: 'id',
						type: 'varchar',
						isPrimary: true,
						generationStrategy: 'uuid',
						default: 'uuid_generate_v4()',
					},
					{
						name: 'titulo',
						type: 'varchar',
					},
					{
						name: 'descricao',
						type: 'varchar',
					},
					{
						name: 'tipo_servico',
						type: 'enum',
						enum: [
							'Serviços domésticos',
							'Outros',
							'Babá',
							'Eventos/Festas',
							'Reparação/Conserto/Reforma',
							'Saúde/Beleza',
							'Informática',
							'Tradução',
							'Transporte/Mudanças',
							'Profissionais liberais',
							'Turismo',
						],
					},
					{
						name: 'fotos',
						type: 'varchar',
						isNullable: true,
					},
					{
						name: 'telefone',
						type: 'varchar',
						isNullable: true,
					},
					{
						name: 'created_at',
						type: 'timestamp',
						default: 'now()',
					},
					{
						name: 'updated_at',
						type: 'timestamp',
						default: 'now()',
					},
				],
			}),
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('servicos');
	}
}
