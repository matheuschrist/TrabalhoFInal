-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: 17-Jun-2021 às 17:07
-- Versão do servidor: 8.0.13-4
-- versão do PHP: 7.2.24-0ubuntu0.18.04.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mfIMHFYIWD`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `Acessorio`
--

CREATE TABLE `Acessorio` (
  `AcessorioId` bigint(20) NOT NULL,
  `Tipo` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `Quantidade` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `Acessorio`
--

INSERT INTO `Acessorio` (`AcessorioId`, `Tipo`, `Quantidade`) VALUES
(1, 'Mouse', 0),
(2, 'Fone de Ouvido', 22);

-- --------------------------------------------------------

--
-- Estrutura da tabela `AcessorioSala`
--

CREATE TABLE `AcessorioSala` (
  `AcessorioSalaId` bigint(20) NOT NULL,
  `QuantidadeAcessorio` int(11) NOT NULL,
  `AcessorioId` bigint(20) NOT NULL,
  `SalaId` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `AcessorioSala`
--

INSERT INTO `AcessorioSala` (`AcessorioSalaId`, `QuantidadeAcessorio`, `AcessorioId`, `SalaId`) VALUES
(34, 20, 1, 2),
(35, 3, 2, 2);

-- --------------------------------------------------------

--
-- Estrutura da tabela `DocumentoRevisao`
--

CREATE TABLE `DocumentoRevisao` (
  `DocumentoRevisaoId` bigint(20) NOT NULL,
  `DescricaoProblema` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `DataAbertura` datetime NOT NULL,
  `Status` int(11) NOT NULL,
  `DataConclusao` datetime DEFAULT NULL,
  `Defeito` tinyint(1) NOT NULL,
  `EquipamentoId` bigint(20) DEFAULT NULL,
  `SalaId` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `Equipamento`
--

CREATE TABLE `Equipamento` (
  `EquipamentoId` bigint(20) NOT NULL,
  `Patrimonio` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `Status` int(11) NOT NULL,
  `DataCadastro` datetime NOT NULL,
  `TipoEquipamentoId` bigint(20) NOT NULL,
  `SalaId` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `Equipamento`
--

INSERT INTO `Equipamento` (`EquipamentoId`, `Patrimonio`, `Status`, `DataCadastro`, `TipoEquipamentoId`, `SalaId`) VALUES
(2, 'Patrimonio123', 1, '2021-06-15 20:16:26', 1, NULL),
(4, 'Patrimonio124', 2, '2021-06-15 20:16:59', 2, NULL),
(5, 'Patrimonio125', 0, '2021-06-15 22:35:35', 1, NULL);

-- --------------------------------------------------------

--
-- Estrutura da tabela `Login`
--

CREATE TABLE `Login` (
  `UsuarioId` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `Requisicao`
--

CREATE TABLE `Requisicao` (
  `RequisicaoId` bigint(20) NOT NULL,
  `Tipo` int(11) NOT NULL,
  `Status` int(11) NOT NULL,
  `DataAbertura` datetime NOT NULL,
  `DataEntrega` datetime DEFAULT NULL,
  `DataConclusao` datetime DEFAULT NULL,
  `DataCancelamento` datetime DEFAULT NULL,
  `UsuarioId` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `RequisicaoAcessorio`
--

CREATE TABLE `RequisicaoAcessorio` (
  `RequisicaoAcessorioId` bigint(20) NOT NULL,
  `QuantidadeAcessorio` int(11) NOT NULL,
  `RequisicaoId` bigint(20) NOT NULL,
  `AcessorioId` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `RequisicaoEquipamento`
--

CREATE TABLE `RequisicaoEquipamento` (
  `RequisicaoEquipamentoId` bigint(20) NOT NULL,
  `RequisicaoId` bigint(20) NOT NULL,
  `EquipamentoId` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `RequisicaoSala`
--

CREATE TABLE `RequisicaoSala` (
  `RequisicaoSalaId` bigint(20) NOT NULL,
  `RequisicaoId` bigint(20) NOT NULL,
  `SalaId` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `RequisicaoTipoEquipamento`
--

CREATE TABLE `RequisicaoTipoEquipamento` (
  `RequisicaoTipoEquipamentoId` bigint(20) NOT NULL,
  `QuantidadeSolicitada` int(11) NOT NULL,
  `RequisicaoId` bigint(20) NOT NULL,
  `TipoEquipamentoId` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `Sala`
--

CREATE TABLE `Sala` (
  `SalaId` bigint(20) NOT NULL,
  `NumeroSala` int(11) NOT NULL,
  `Status` int(11) NOT NULL,
  `QuantidadeAluno` int(11) NOT NULL,
  `QuantidadeAlunoPandemia` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `Sala`
--

INSERT INTO `Sala` (`SalaId`, `NumeroSala`, `Status`, `QuantidadeAluno`, `QuantidadeAlunoPandemia`) VALUES
(1, 404, 0, 25, 12),
(2, 403, 0, 40, 20);

-- --------------------------------------------------------

--
-- Estrutura da tabela `TipoEquipamento`
--

CREATE TABLE `TipoEquipamento` (
  `TipoEquipamentoId` bigint(20) NOT NULL,
  `NomeTipo` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `TipoEquipamento`
--

INSERT INTO `TipoEquipamento` (`TipoEquipamentoId`, `NomeTipo`) VALUES
(1, 'Notebook'),
(2, 'Tablet'),
(3, 'Teste');

-- --------------------------------------------------------

--
-- Estrutura da tabela `Usuario`
--

CREATE TABLE `Usuario` (
  `UsuarioId` bigint(20) NOT NULL,
  `Nome` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `Login` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `Senha` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `Identificacao` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `Tipo` int(11) NOT NULL,
  `Email` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `Usuario`
--

INSERT INTO `Usuario` (`UsuarioId`, `Nome`, `Login`, `Senha`, `Identificacao`, `Tipo`, `Email`) VALUES
(6, 'Deivyd', 'deivyd', 'deivyd123', 'Deivyd', 1, 'deivyd@gmail.com'),
(7, 'TesteEditado', 'testeedit', 'deivyd123', 'Deivyd257527', 1, 'testeedit1@gmail.com'),
(8, 'DeivydEditado', 'deivydedit', 'deivyd123', 'DeivydEdit123', 1, 'deivydedit1@gmail.com'),
(9, 'Deivyd2', 'deivydw2', 'deivyd123', 'Deivyd1234562', 0, 'deivyd2@gmail.com'),
(10, '123Deivyd456', 'deivydw123', 'deivyd123', 'Deivyd111', 0, 'deivyd123@gmail.com'),
(11, 'TesteDeivyd', 'testedeivyd', 'teste', 'TesteDeivyd', 0, 'testedeivyd@gmail.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Acessorio`
--
ALTER TABLE `Acessorio`
  ADD PRIMARY KEY (`AcessorioId`),
  ADD UNIQUE KEY `Tipo` (`Tipo`);

--
-- Indexes for table `AcessorioSala`
--
ALTER TABLE `AcessorioSala`
  ADD PRIMARY KEY (`AcessorioSalaId`),
  ADD UNIQUE KEY `AcessorioSala_SalaId_AcessorioId_unique` (`AcessorioId`,`SalaId`),
  ADD KEY `SalaId` (`SalaId`);

--
-- Indexes for table `DocumentoRevisao`
--
ALTER TABLE `DocumentoRevisao`
  ADD PRIMARY KEY (`DocumentoRevisaoId`),
  ADD KEY `EquipamentoId` (`EquipamentoId`),
  ADD KEY `SalaId` (`SalaId`);

--
-- Indexes for table `Equipamento`
--
ALTER TABLE `Equipamento`
  ADD PRIMARY KEY (`EquipamentoId`),
  ADD UNIQUE KEY `Patrimonio` (`Patrimonio`),
  ADD KEY `TipoEquipamentoId` (`TipoEquipamentoId`),
  ADD KEY `SalaId` (`SalaId`);

--
-- Indexes for table `Login`
--
ALTER TABLE `Login`
  ADD UNIQUE KEY `UsuarioId` (`UsuarioId`) USING BTREE;

--
-- Indexes for table `Requisicao`
--
ALTER TABLE `Requisicao`
  ADD PRIMARY KEY (`RequisicaoId`),
  ADD KEY `UsuarioId` (`UsuarioId`);

--
-- Indexes for table `RequisicaoAcessorio`
--
ALTER TABLE `RequisicaoAcessorio`
  ADD PRIMARY KEY (`RequisicaoAcessorioId`),
  ADD UNIQUE KEY `RequisicaoAcessorio_RequisicaoId_AcessorioId_unique` (`RequisicaoId`,`AcessorioId`),
  ADD KEY `AcessorioId` (`AcessorioId`);

--
-- Indexes for table `RequisicaoEquipamento`
--
ALTER TABLE `RequisicaoEquipamento`
  ADD PRIMARY KEY (`RequisicaoEquipamentoId`),
  ADD UNIQUE KEY `RequisicaoEquipamento_RequisicaoId_EquipamentoId_unique` (`RequisicaoId`,`EquipamentoId`),
  ADD KEY `EquipamentoId` (`EquipamentoId`);

--
-- Indexes for table `RequisicaoSala`
--
ALTER TABLE `RequisicaoSala`
  ADD PRIMARY KEY (`RequisicaoSalaId`),
  ADD UNIQUE KEY `RequisicaoSala_SalaId_RequisicaoId_unique` (`RequisicaoId`,`SalaId`),
  ADD KEY `SalaId` (`SalaId`);

--
-- Indexes for table `RequisicaoTipoEquipamento`
--
ALTER TABLE `RequisicaoTipoEquipamento`
  ADD PRIMARY KEY (`RequisicaoTipoEquipamentoId`),
  ADD UNIQUE KEY `RequisicaoTipoEquipamento_TipoEquipamentoId_RequisicaoId_unique` (`RequisicaoId`,`TipoEquipamentoId`),
  ADD KEY `TipoEquipamentoId` (`TipoEquipamentoId`);

--
-- Indexes for table `Sala`
--
ALTER TABLE `Sala`
  ADD PRIMARY KEY (`SalaId`),
  ADD UNIQUE KEY `NumeroSala` (`NumeroSala`);

--
-- Indexes for table `TipoEquipamento`
--
ALTER TABLE `TipoEquipamento`
  ADD PRIMARY KEY (`TipoEquipamentoId`),
  ADD UNIQUE KEY `NomeTipo` (`NomeTipo`);

--
-- Indexes for table `Usuario`
--
ALTER TABLE `Usuario`
  ADD PRIMARY KEY (`UsuarioId`),
  ADD UNIQUE KEY `Usuario` (`Login`),
  ADD UNIQUE KEY `Email` (`Email`),
  ADD UNIQUE KEY `Identificacao` (`Identificacao`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Acessorio`
--
ALTER TABLE `Acessorio`
  MODIFY `AcessorioId` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `AcessorioSala`
--
ALTER TABLE `AcessorioSala`
  MODIFY `AcessorioSalaId` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `DocumentoRevisao`
--
ALTER TABLE `DocumentoRevisao`
  MODIFY `DocumentoRevisaoId` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Equipamento`
--
ALTER TABLE `Equipamento`
  MODIFY `EquipamentoId` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Requisicao`
--
ALTER TABLE `Requisicao`
  MODIFY `RequisicaoId` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `RequisicaoAcessorio`
--
ALTER TABLE `RequisicaoAcessorio`
  MODIFY `RequisicaoAcessorioId` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `RequisicaoSala`
--
ALTER TABLE `RequisicaoSala`
  MODIFY `RequisicaoSalaId` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Sala`
--
ALTER TABLE `Sala`
  MODIFY `SalaId` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `TipoEquipamento`
--
ALTER TABLE `TipoEquipamento`
  MODIFY `TipoEquipamentoId` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Usuario`
--
ALTER TABLE `Usuario`
  MODIFY `UsuarioId` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Limitadores para a tabela `AcessorioSala`
--
ALTER TABLE `AcessorioSala`
  ADD CONSTRAINT `AcessorioSala_ibfk_1` FOREIGN KEY (`AcessorioId`) REFERENCES `Acessorio` (`acessorioid`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `AcessorioSala_ibfk_2` FOREIGN KEY (`SalaId`) REFERENCES `Sala` (`salaid`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Limitadores para a tabela `DocumentoRevisao`
--
ALTER TABLE `DocumentoRevisao`
  ADD CONSTRAINT `DocumentoRevisao_ibfk_1` FOREIGN KEY (`EquipamentoId`) REFERENCES `Equipamento` (`equipamentoid`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `DocumentoRevisao_ibfk_2` FOREIGN KEY (`SalaId`) REFERENCES `Sala` (`salaid`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Limitadores para a tabela `Equipamento`
--
ALTER TABLE `Equipamento`
  ADD CONSTRAINT `Equipamento_ibfk_1` FOREIGN KEY (`TipoEquipamentoId`) REFERENCES `TipoEquipamento` (`tipoequipamentoid`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `Equipamento_ibfk_2` FOREIGN KEY (`SalaId`) REFERENCES `Sala` (`salaid`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Limitadores para a tabela `Login`
--
ALTER TABLE `Login`
  ADD CONSTRAINT `Login_ibfk_1` FOREIGN KEY (`UsuarioId`) REFERENCES `Usuario` (`usuarioid`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Limitadores para a tabela `Requisicao`
--
ALTER TABLE `Requisicao`
  ADD CONSTRAINT `Requisicao_ibfk_1` FOREIGN KEY (`UsuarioId`) REFERENCES `Usuario` (`usuarioid`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Limitadores para a tabela `RequisicaoAcessorio`
--
ALTER TABLE `RequisicaoAcessorio`
  ADD CONSTRAINT `RequisicaoAcessorio_ibfk_1` FOREIGN KEY (`RequisicaoId`) REFERENCES `Requisicao` (`requisicaoid`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `RequisicaoAcessorio_ibfk_2` FOREIGN KEY (`AcessorioId`) REFERENCES `Acessorio` (`acessorioid`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Limitadores para a tabela `RequisicaoEquipamento`
--
ALTER TABLE `RequisicaoEquipamento`
  ADD CONSTRAINT `RequisicaoEquipamento_ibfk_1` FOREIGN KEY (`RequisicaoId`) REFERENCES `Requisicao` (`requisicaoid`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `RequisicaoEquipamento_ibfk_2` FOREIGN KEY (`EquipamentoId`) REFERENCES `Equipamento` (`equipamentoid`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Limitadores para a tabela `RequisicaoSala`
--
ALTER TABLE `RequisicaoSala`
  ADD CONSTRAINT `RequisicaoSala_ibfk_1` FOREIGN KEY (`RequisicaoId`) REFERENCES `Requisicao` (`requisicaoid`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `RequisicaoSala_ibfk_2` FOREIGN KEY (`SalaId`) REFERENCES `Sala` (`salaid`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Limitadores para a tabela `RequisicaoTipoEquipamento`
--
ALTER TABLE `RequisicaoTipoEquipamento`
  ADD CONSTRAINT `RequisicaoTipoEquipamento_ibfk_1` FOREIGN KEY (`RequisicaoId`) REFERENCES `Requisicao` (`requisicaoid`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `RequisicaoTipoEquipamento_ibfk_2` FOREIGN KEY (`TipoEquipamentoId`) REFERENCES `TipoEquipamento` (`tipoequipamentoid`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
