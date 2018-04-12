<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class SetEnvironmentCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'env:set {env}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Set the current framework environment';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $path = base_path('.env');
        $newEnv = $this->argument('env');

        if (file_exists($path)) {
            file_put_contents($path, str_replace(
                'APP_ENV='.$this->laravel['config']['app.env'], 'APP_ENV='.$newEnv, file_get_contents($path)
            ));

            $this->info("Framework environment [$newEnv] set successfully.");
        }
    }
}
