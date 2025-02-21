# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.4.0] - Unreleased

### Added
- server-side authentication for the status-reviews page ([216](https://github.com/boarlabsxyz/Kavoon/pull/216))
- generation of sitemap.xml for Google indexing ([#218](https://github.com/boarlabsxyz/Kavoon/pull/218))

### Removed
- unused prints (dinosaurs, scarlet_ibis, star_flower, foxes, parrots, leaf_on_black, jungle, forest) and their corresponding pictures ([#217](https://github.com/boarlabsxyz/Kavoon/pull/217))

## [1.3.0] - 2025-02-10

### Added
- robots.txt for search engine crawlers ([#200](https://github.com/boarlabsxyz/Kavoon/pull/200))
- google html file for verification website's ownership ([#199](https://github.com/boarlabsxyz/Kavoon/pull/199))
- SonarQube cloud test coverage ([#196](https://github.com/boarlabsxyz/Kavoon/pull/196))

### Fixed
- making and updating snapshots in e2e-tests on github actions ([#181](https://github.com/boarlabsxyz/Kavoon/pull/181))

### Changed
- update the icon languages and flags with higher quality for mobile devices with Retina and Super AMOLED displays ([#197](https://github.com/boarlabsxyz/Kavoon/pull/197))

## [1.2.0] - 2025-01-15

### Added
- accessibility for the Filter dropdown and the Reviews section
- reviews to the "All Products" page
- sorting to the shop page
- common/reviewsSection component ([#167](https://github.com/boarlabsxyz/Kavoon/pull/167))
- updateSnapshots workflow for github actions ([#176](https://github.com/boarlabsxyz/Kavoon/pull/176))
- cartButton component for mobile ([#176](https://github.com/boarlabsxyz/Kavoon/pull/176))

### Fixed
- incorrect illumination of the navigation arrows in the reviews
- issue where the forward/backward arrows in the reviews section disappeared when adjusting the page scale
- incorrect display of the contents of the "Menu"”" page on a mobile phone
- wrong display of "All Products" category section on the home page
- duplication of the shopping carts on the product details page
- possibility to sent review a review from any page with any products ([#167](https://github.com/boarlabsxyz/Kavoon/pull/167))
- api/reviews/route - route for working with reviews ([#167](https://github.com/boarlabsxyz/Kavoon/pull/167))
- mobile menu navigation styles that were not displayed correctly on the iPhone ([#186](https://github.com/boarlabsxyz/Kavoon/pull/186))
- styles for centering the counter value in the shopping cart ([#188](https://github.com/boarlabsxyz/Kavoon/pull/188))

### Changed
- menu navigation for Kavoon 
- the shopping cart position from the page to the header with navigation

### Removed
- product categories as a filter on shop page
- unused code for Delivery and Payment page
- homePage/reviewsSection component ([#167](https://github.com/boarlabsxyz/Kavoon/pull/167))
- productPage/reviewsSection component ([#167](https://github.com/boarlabsxyz/Kavoon/pull/167))
- cartStatusForMenu component ([#176](https://github.com/boarlabsxyz/Kavoon/pull/176))

## [1.1.0] - 2025-01-15

### Changed
- the text for "How to place an order?" section on product details page
- the text and logos on the Delivery and Payment page

## [1.0.0] - 2024-12-23
### Added
- GitHub Actions workflow for Vercel preview deployments
- GitHub Actions workflow for automated production deployment to Vercel
- jobs for code linting, unit testing, end-to-end testing, and production deployment

### Fixed
- user experience by preventing photo/text selection within the slider component
- styles for "Write a review" modal window
- a bug with adding a Barrelbag without a valve and accessories

### Changed
- prices for all products on the website
- displaying products (were hidden) that are not currently available for sale
