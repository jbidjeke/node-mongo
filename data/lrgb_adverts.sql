-- phpMyAdmin SQL Dump
-- version 4.5.4.1
-- http://www.phpmyadmin.net
--
-- Client :  h2mysql2
-- Généré le :  Jeu 25 Février 2016 à 09:22
-- Version du serveur :  5.5.40-log
-- Version de PHP :  5.6.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `lrgb_adverts`
--

-- --------------------------------------------------------

--
-- Structure de la table `Advert`
--

CREATE TABLE `Advert` (
  `id` int(11) NOT NULL,
  `image_id` int(11) DEFAULT NULL,
  `geolocate_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `date` datetime NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `author` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `content` longtext COLLATE utf8_unicode_ci NOT NULL,
  `published` tinyint(1) NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `nb_applications` int(11) NOT NULL,
  `slug` varchar(128) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Contenu de la table `Advert`
--

INSERT INTO `Advert` (`id`, `image_id`, `geolocate_id`, `user_id`, `date`, `price`, `title`, `author`, `content`, `published`, `updated_at`, `nb_applications`, `slug`) VALUES
(14, 14, 14, 16, '2015-11-04 17:06:06', '20.00', 'cours informatiques', 'donalson', 'programmation avec langages opensources', 1, NULL, 0, 'cours-informatiques');

-- --------------------------------------------------------

--
-- Structure de la table `AdvertSkill`
--

CREATE TABLE `AdvertSkill` (
  `id` int(11) NOT NULL,
  `advert_id` int(11) NOT NULL,
  `skill_id` int(11) NOT NULL,
  `level` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `advert_category`
--

CREATE TABLE `advert_category` (
  `advert_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Contenu de la table `advert_category`
--

INSERT INTO `advert_category` (`advert_id`, `category_id`) VALUES
(14, 13);

-- --------------------------------------------------------

--
-- Structure de la table `Application`
--

CREATE TABLE `Application` (
  `id` int(11) NOT NULL,
  `advert_id` int(11) NOT NULL,
  `author` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `content` longtext COLLATE utf8_unicode_ci NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `Category`
--

CREATE TABLE `Category` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Contenu de la table `Category`
--

INSERT INTO `Category` (`id`, `name`) VALUES
(2, 'Voitures'),
(3, 'Motos'),
(4, 'Nautisme'),
(5, 'Ventes immobilieres'),
(6, 'Locations'),
(7, 'Colocations'),
(8, 'Locations de vacances'),
(9, 'Bureaux Commerces'),
(10, 'Maisons'),
(11, 'Loisirs'),
(12, 'Materiel Professionnel'),
(13, 'Emploi Services'),
(14, 'Media');

-- --------------------------------------------------------

--
-- Structure de la table `Geolocate`
--

CREATE TABLE `Geolocate` (
  `id` int(11) NOT NULL,
  `lat` double NOT NULL,
  `lng` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Contenu de la table `Geolocate`
--

INSERT INTO `Geolocate` (`id`, `lat`, `lng`) VALUES
(14, 48.449081, 6.738028999999983);

-- --------------------------------------------------------

--
-- Structure de la table `Image`
--

CREATE TABLE `Image` (
  `id` int(11) NOT NULL,
  `url` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `alt` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Contenu de la table `Image`
--

INSERT INTO `Image` (`id`, `url`, `alt`) VALUES
(11, 'jpeg', 'logo_opensource.jpg'),
(12, 'jpeg', 'logo_opensource.jpg'),
(13, 'jpeg', 'logo_opensource.jpg'),
(14, 'jpeg', 'logo_opensource.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `Skill`
--

CREATE TABLE `Skill` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `username_canonical` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email_canonical` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `enabled` tinyint(1) NOT NULL,
  `salt` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `last_login` datetime DEFAULT NULL,
  `locked` tinyint(1) NOT NULL,
  `expired` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  `confirmation_token` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `password_requested_at` datetime DEFAULT NULL,
  `roles` longtext COLLATE utf8_unicode_ci NOT NULL COMMENT '(DC2Type:array)',
  `credentials_expired` tinyint(1) NOT NULL,
  `credentials_expire_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Contenu de la table `user`
--

INSERT INTO `user` (`id`, `username`, `username_canonical`, `email`, `email_canonical`, `enabled`, `salt`, `password`, `last_login`, `locked`, `expired`, `expires_at`, `confirmation_token`, `password_requested_at`, `roles`, `credentials_expired`, `credentials_expire_at`) VALUES
(16, 'jbidjeke', 'jbidjeke', 'jbidjeke@yahoo.fr', 'jbidjeke@yahoo.fr', 1, 'jup4qzziqm8w0ws0w800kgs8k800kow', 'xN9WoGNj1EZ81ddaE00wppaU750Y7ym2P/22ITtO2L901ofJ9sWlyw==', NULL, 0, 0, NULL, NULL, NULL, 'a:0:{}', 0, NULL);

--
-- Index pour les tables exportées
--

--
-- Index pour la table `Advert`
--
ALTER TABLE `Advert`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_535DF13D989D9B62` (`slug`),
  ADD UNIQUE KEY `UNIQ_535DF13D75B03153` (`geolocate_id`),
  ADD UNIQUE KEY `UNIQ_535DF13D3DA5256D` (`image_id`),
  ADD KEY `IDX_535DF13DA76ED395` (`user_id`);

--
-- Index pour la table `AdvertSkill`
--
ALTER TABLE `AdvertSkill`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_D6575F2D07ECCB6` (`advert_id`),
  ADD KEY `IDX_D6575F25585C142` (`skill_id`);

--
-- Index pour la table `advert_category`
--
ALTER TABLE `advert_category`
  ADD PRIMARY KEY (`advert_id`,`category_id`),
  ADD KEY `IDX_84EEA340D07ECCB6` (`advert_id`),
  ADD KEY `IDX_84EEA34012469DE2` (`category_id`);

--
-- Index pour la table `Application`
--
ALTER TABLE `Application`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_22C75216D07ECCB6` (`advert_id`);

--
-- Index pour la table `Category`
--
ALTER TABLE `Category`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `Geolocate`
--
ALTER TABLE `Geolocate`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `Image`
--
ALTER TABLE `Image`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `Skill`
--
ALTER TABLE `Skill`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_8D93D64992FC23A8` (`username_canonical`),
  ADD UNIQUE KEY `UNIQ_8D93D649A0D96FBF` (`email_canonical`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `Advert`
--
ALTER TABLE `Advert`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT pour la table `AdvertSkill`
--
ALTER TABLE `AdvertSkill`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `Application`
--
ALTER TABLE `Application`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `Category`
--
ALTER TABLE `Category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT pour la table `Geolocate`
--
ALTER TABLE `Geolocate`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT pour la table `Image`
--
ALTER TABLE `Image`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT pour la table `Skill`
--
ALTER TABLE `Skill`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `Advert`
--
ALTER TABLE `Advert`
  ADD CONSTRAINT `FK_535DF13D3DA5256D` FOREIGN KEY (`image_id`) REFERENCES `Image` (`id`),
  ADD CONSTRAINT `FK_535DF13D75B03153` FOREIGN KEY (`geolocate_id`) REFERENCES `Geolocate` (`id`),
  ADD CONSTRAINT `FK_535DF13DA76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Contraintes pour la table `AdvertSkill`
--
ALTER TABLE `AdvertSkill`
  ADD CONSTRAINT `FK_D6575F25585C142` FOREIGN KEY (`skill_id`) REFERENCES `Skill` (`id`),
  ADD CONSTRAINT `FK_D6575F2D07ECCB6` FOREIGN KEY (`advert_id`) REFERENCES `Advert` (`id`);

--
-- Contraintes pour la table `advert_category`
--
ALTER TABLE `advert_category`
  ADD CONSTRAINT `FK_84EEA34012469DE2` FOREIGN KEY (`category_id`) REFERENCES `Category` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_84EEA340D07ECCB6` FOREIGN KEY (`advert_id`) REFERENCES `Advert` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `Application`
--
ALTER TABLE `Application`
  ADD CONSTRAINT `FK_22C75216D07ECCB6` FOREIGN KEY (`advert_id`) REFERENCES `Advert` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
