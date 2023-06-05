/*
  Warnings:

  - You are about to drop the column `nome` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the `Aluno` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `InscricaoDisciplina` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Professor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProfessorDisciplina` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[username]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[perfilId]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `perfilId` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "InscricaoDisciplina" DROP CONSTRAINT "InscricaoDisciplina_alunoId_fkey";

-- DropForeignKey
ALTER TABLE "InscricaoDisciplina" DROP CONSTRAINT "InscricaoDisciplina_disciplinaId_fkey";

-- DropForeignKey
ALTER TABLE "ProfessorDisciplina" DROP CONSTRAINT "ProfessorDisciplina_disciplinaId_fkey";

-- DropForeignKey
ALTER TABLE "ProfessorDisciplina" DROP CONSTRAINT "ProfessorDisciplina_professorId_fkey";

-- AlterTable
ALTER TABLE "Usuario" DROP COLUMN "nome",
ADD COLUMN     "perfilId" INTEGER NOT NULL,
ADD COLUMN     "username" TEXT NOT NULL;

-- DropTable
DROP TABLE "Aluno";

-- DropTable
DROP TABLE "InscricaoDisciplina";

-- DropTable
DROP TABLE "Professor";

-- DropTable
DROP TABLE "ProfessorDisciplina";

-- CreateTable
CREATE TABLE "TipoUsuario" (
    "id" SERIAL NOT NULL,
    "codigo" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "TipoUsuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsuarioDisciplina" (
    "disciplinaId" INTEGER NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assignedBy" TEXT NOT NULL,

    CONSTRAINT "UsuarioDisciplina_pkey" PRIMARY KEY ("usuarioId","disciplinaId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_username_key" ON "Usuario"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_perfilId_key" ON "Usuario"("perfilId");

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_perfilId_fkey" FOREIGN KEY ("perfilId") REFERENCES "TipoUsuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuarioDisciplina" ADD CONSTRAINT "UsuarioDisciplina_disciplinaId_fkey" FOREIGN KEY ("disciplinaId") REFERENCES "Disciplina"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuarioDisciplina" ADD CONSTRAINT "UsuarioDisciplina_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
