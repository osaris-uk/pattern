# pattern
A simple pattern for Laravel 5.5

## Installation

`composer create-project osaris-uk/pattern --prefer-dist projectname`

After composer has finished hook up your DB in .env and run `php artisan migrate`

## What is pattern?

Pattern is a simple boilerplate for Laravel applications.  It includes a standard laravel installation but with some other features pre-configured:

 - Role & Permission based access control
 - E-Mail account activation
 - [Sweet Alert](https://github.com/t4t5/sweetalert) preinstalled 
 - Notifications built in using [Notify](https://github.com/codecourse/notify)
 - EU cookie consent using [Cookieconsent](https://github.com/insites/cookieconsent)
 - 'My Account' Area including dashboard, account update and change password functionality
 - env:set {env} artisan command
 - Bootstrap 4.1

## New features / issues?

If you have any ideas for other features to include or see any issues get in touch and I'll have a look, but bear in mind a few things:

 - This specifically uses Laravel 5.5 as my current hosting provider does not currently support 5.6
 - The primary reason I created this is to make my life easier
 - I don't want to over complicate things

## Thanks to..

 - Laravel is a fantastic PHP framework to work with, check it out [here.](https://laravel.com/)
 - [Codecourse](https://www.codecourse.com)