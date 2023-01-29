
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `dhrentals` DEFAULT CHARACTER SET utf8 ;
USE `dhrentals` ;

-- -----------------------------------------------------
-- Table `dhrentals`.`category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dhrentals`.`category` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dhrentals`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dhrentals`.`products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `image` VARCHAR(255) NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `price` DECIMAL NOT NULL,
  `in_sale` VARCHAR(255) NOT NULL,
  `category_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  INDEX `fk_products_category1_idx` (`category_id` ASC),
  CONSTRAINT `fk_products_category1`
    FOREIGN KEY (`category_id`)
    REFERENCES `dhrentals`.`category` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dhrentals`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dhrentals`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `image` VARCHAR(255) NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `last_name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `adress` VARCHAR(255) NOT NULL,
  `cell_phone` DECIMAL NOT NULL,
  `rol` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dhrentals`.`stock`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dhrentals`.`stock` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `products_id` INT NOT NULL,
  `in_stock` DECIMAL NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  INDEX `fk_stock_products1_idx` (`products_id` ASC),
  CONSTRAINT `fk_stock_products1`
    FOREIGN KEY (`products_id`)
    REFERENCES `dhrentals`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dhrentals`.`cart`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dhrentals`.`cart` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `products_id` INT NOT NULL,
  `users_id` INT NOT NULL,
  `quantity` DECIMAL NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_products_has_users_users1_idx` (`users_id` ASC),
  INDEX `fk_products_has_users_products_idx` (`products_id` ASC),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  CONSTRAINT `fk_products_has_users_products`
    FOREIGN KEY (`products_id`)
    REFERENCES `dhrentals`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_products_has_users_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `dhrentals`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dhrentals`.`shop`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dhrentals`.`shop` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `products_id` INT NOT NULL,
  `users_id` INT NOT NULL,
  `quantity` DECIMAL NOT NULL,
  `total_price` DECIMAL NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_products_has_users1_users1_idx` (`users_id` ASC),
  INDEX `fk_products_has_users1_products1_idx` (`products_id` ASC),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  CONSTRAINT `fk_products_has_users1_products1`
    FOREIGN KEY (`products_id`)
    REFERENCES `dhrentals`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_products_has_users1_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `dhrentals`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


