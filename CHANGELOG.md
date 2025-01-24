# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2024-12-23
### Added
- GitHub Actions workflow for Vercel preview deployments
- GitHub Actions workflow for automated production deployment to Vercel
- jobs for code linting, unit testing, end-to-end testing, and production deployment

### Changed
- prices for all products on the website
- displaying products (were hidden) that are not currently available for sale

### Fixed
- user experience by preventing photo/text selection within the slider component
- styles for "Write a review" modal window
- a bug with adding a Barrelbag without a valve and accessories

## [1.1.0] - 2025-01-15

### Changed
- the text for "How to place an order?" section on product details page
- the text and logos on the Delivery and Payment page

## [1.2.0] - Unreleased

### Added
- reviews to the "All Products" page
- sorting to the shop page
- common/reviewsSection component (https://github.com/boarlabsxyz/Kavoon/pull/167)

### Changed
- menu navigation for Kavoon 
- the shopping cart position from the page to the header with navigation
- 

### Fixed
- incorrect display of the contents of the "Menu"”" page on a mobile phone
- wrong display of "All Products" category section on the home page
- duplication of the shopping carts on the product details page
- posibility to sent review a review from any page with any products (https://github.com/boarlabsxyz/Kavoon/pull/167)
- api/reviews/route - route for working with reviews (https://github.com/boarlabsxyz/Kavoon/pull/167)

### Removed
- product categories as a filter on shop page
- unused code for Delivery and Payment page
- homePage/reviewsSection component (https://github.com/boarlabsxyz/Kavoon/pull/167)
- productPage/reviewsSection component (https://github.com/boarlabsxyz/Kavoon/pull/167)
