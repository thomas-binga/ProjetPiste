-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 15 juin 2022 à 21:42
-- Version du serveur : 10.4.22-MariaDB
-- Version de PHP : 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `projetpermis1`
--

-- --------------------------------------------------------

--
-- Structure de la table `action`
--

CREATE TABLE `action` (
  `id` int(11) NOT NULL,
  `fk_action` int(11) DEFAULT NULL,
  `description` char(25) DEFAULT NULL,
  `score_minimum` int(11) DEFAULT NULL,
  `wording` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `action`
--

INSERT INTO `action` (`id`, `fk_action`, `description`, `score_minimum`, `wording`) VALUES
(1, NULL, 'Se mettre en tenue', 4, NULL),
(2, 1, 'Préparation véhicule', 2, NULL),
(3, 2, 'Effectuer manoeuvre', 8, NULL),
(4, NULL, 'Analyser panne(s)', 2, NULL),
(5, 4, 'Résoudre panne(s)', 5, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `action__mission`
--

CREATE TABLE `action__mission` (
  `fk_action` int(11) NOT NULL,
  `fk_mission` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `action__mission`
--

INSERT INTO `action__mission` (`fk_action`, `fk_mission`) VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 1),
(4, 2),
(5, 1),
(5, 2);

-- --------------------------------------------------------

--
-- Structure de la table `indicator`
--

CREATE TABLE `indicator` (
  `id` int(11) NOT NULL,
  `fk_action` int(11) NOT NULL,
  `wording` char(50) DEFAULT NULL,
  `valueIfCheck` int(11) DEFAULT NULL,
  `valueIfUnCheck` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `indicator`
--

INSERT INTO `indicator` (`id`, `fk_action`, `wording`, `valueIfCheck`, `valueIfUnCheck`) VALUES
(1, 1, 'Prendre ses outils', 1, -1),
(2, 1, 'Mettre sa tenue correctement', 3, -1),
(3, 1, 'Vérifier ses outils', 4, -2),
(4, 1, 'Prendre des explosifs', -1, 1),
(5, 2, 'Vérifier l\'état des pneus', 3, -2),
(6, 2, 'Vérifier le niveau d\'huile moteur', 1, 0),
(7, 2, 'Vérifier le niveau d\'essence', 3, -1),
(8, 3, 'Conduire à 110 km/h', -2, 2),
(9, 3, 'Conduire les yeux ouverts', 3, -6),
(10, 3, 'Avoir les deux mains sur le volant', 1, 0),
(11, 3, 'Réussir la manoeuvre', 6, -2),
(12, 3, 'Toucher le décor', -3, 3),
(13, 4, 'S\'informer auprès des techniciens', 2, 0),
(14, 4, 'Consulter le manuel', 1, 0),
(15, 4, 'Respecter la procédure', 2, -2),
(16, 4, 'Demander de l\'aide à la tour de contrôle', -1, 1),
(17, 5, 'Trouver la cause de la panne', 6, -3),
(18, 5, 'Utiliser les bons outils', 4, -1);

-- --------------------------------------------------------

--
-- Structure de la table `inscription`
--

CREATE TABLE `inscription` (
  `id` int(11) NOT NULL,
  `fk_utilisateur` int(11) NOT NULL,
  `fk_mission` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `inscription`
--

INSERT INTO `inscription` (`id`, `fk_utilisateur`, `fk_mission`) VALUES
(11, 2, 1),
(12, 2, 2),
(14, 17, 1);

-- --------------------------------------------------------

--
-- Structure de la table `inscription__action`
--

CREATE TABLE `inscription__action` (
  `id` int(11) NOT NULL,
  `fk_inscription` int(11) NOT NULL,
  `fk_action` int(11) NOT NULL,
  `sort` int(11) DEFAULT NULL,
  `score` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `inscription__action`
--

INSERT INTO `inscription__action` (`id`, `fk_inscription`, `fk_action`, `sort`, `score`) VALUES
(1, 11, 1, NULL, 9),
(2, 11, 2, NULL, 7),
(3, 11, 3, NULL, 15),
(4, 11, 4, NULL, 2),
(5, 11, 5, NULL, 10),
(6, 12, 4, NULL, NULL),
(7, 12, 5, NULL, NULL),
(13, 14, 1, NULL, 7),
(14, 14, 2, NULL, NULL),
(15, 14, 3, NULL, NULL),
(16, 14, 4, NULL, 6),
(17, 14, 5, NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `mission`
--

CREATE TABLE `mission` (
  `id` int(11) NOT NULL,
  `nom` char(25) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `mission`
--

INSERT INTO `mission` (`id`, `nom`) VALUES
(1, 'Mission A'),
(2, 'Mission B');

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

CREATE TABLE `utilisateur` (
  `NumUtil` int(11) NOT NULL,
  `email` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `surname` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `forename` varchar(50) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `utilisateur`
--

INSERT INTO `utilisateur` (`NumUtil`, `email`, `surname`, `forename`) VALUES
(1, 'john.merlot@gmail.com', 'John', 'Merlot'),
(2, 'pierre.lalande@gmail.com', 'Lalande', 'Pierre'),
(3, 'thibault.pinot@gmail.com', 'Pinot', 'Thibault'),
(17, 'jean.henry@gmail.com', 'Henry', 'Jean');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `action`
--
ALTER TABLE `action`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Act_KEY_FK_ACTION_PREDECESSOR` (`fk_action`);

--
-- Index pour la table `action__mission`
--
ALTER TABLE `action__mission`
  ADD PRIMARY KEY (`fk_action`,`fk_mission`),
  ADD KEY `MisGoa_KEY_FK_MISSION` (`fk_mission`),
  ADD KEY `ActGoa_KEY_FK_ACTION` (`fk_action`);

--
-- Index pour la table `indicator`
--
ALTER TABLE `indicator`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Ind_KEY_FK_ACTION` (`fk_action`);

--
-- Index pour la table `inscription`
--
ALTER TABLE `inscription`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Ins_KEY_FK_USER` (`fk_utilisateur`),
  ADD KEY `Ins_KEY_FK_GAME` (`fk_mission`);

--
-- Index pour la table `inscription__action`
--
ALTER TABLE `inscription__action`
  ADD PRIMARY KEY (`id`),
  ADD KEY `LeaAct_KEY_FK_INSCRIPTION` (`fk_inscription`),
  ADD KEY `LeaAct_KEY_FK_ACTION` (`fk_action`);

--
-- Index pour la table `mission`
--
ALTER TABLE `mission`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  ADD PRIMARY KEY (`NumUtil`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `action`
--
ALTER TABLE `action`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `indicator`
--
ALTER TABLE `indicator`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT pour la table `inscription`
--
ALTER TABLE `inscription`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT pour la table `inscription__action`
--
ALTER TABLE `inscription__action`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT pour la table `mission`
--
ALTER TABLE `mission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  MODIFY `NumUtil` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `action`
--
ALTER TABLE `action`
  ADD CONSTRAINT `FKs8qmnkg2g15pfocb2h1tcgfye` FOREIGN KEY (`fk_action`) REFERENCES `action` (`id`);

--
-- Contraintes pour la table `action__mission`
--
ALTER TABLE `action__mission`
  ADD CONSTRAINT `ActGoa_FK_ACTION` FOREIGN KEY (`fk_action`) REFERENCES `action` (`id`),
  ADD CONSTRAINT `ActGoa_FK_MISSION` FOREIGN KEY (`fk_mission`) REFERENCES `mission` (`id`);

--
-- Contraintes pour la table `indicator`
--
ALTER TABLE `indicator`
  ADD CONSTRAINT `Ind_FK_ACTION` FOREIGN KEY (`fk_action`) REFERENCES `action` (`id`);

--
-- Contraintes pour la table `inscription`
--
ALTER TABLE `inscription`
  ADD CONSTRAINT `Ins_FK_MISSION` FOREIGN KEY (`fk_mission`) REFERENCES `mission` (`id`),
  ADD CONSTRAINT `Ins_FK_USER` FOREIGN KEY (`fk_utilisateur`) REFERENCES `utilisateur` (`NumUtil`);

--
-- Contraintes pour la table `inscription__action`
--
ALTER TABLE `inscription__action`
  ADD CONSTRAINT `LeaAct_FK_ACTION` FOREIGN KEY (`fk_action`) REFERENCES `action` (`id`),
  ADD CONSTRAINT `LeaAct_FK_INSCRIPTION` FOREIGN KEY (`fk_inscription`) REFERENCES `inscription` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
