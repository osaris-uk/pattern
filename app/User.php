<?php

namespace App;

use App\Permissions\HasPermissionsTrait;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable, HasPermissionsTrait;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'active',
        'activation_token',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    public function scopeByActivationTokenAndEmail($query, $token, $email)
    {
        return $query->where('activation_token', $token)->where('email', $email);
    }

    public static function rules()
    {
        return [
            'name' => 'sometimes|required|string|max:255',
            'email' => 'sometimes|required|string|email|max:255|unique:users,email,' . auth()->id(),
            'current_password' => ['sometimes', 'required', new \App\Rules\CurrentPassword],
            'password' => 'sometimes|required|string|min:6|confirmed',
        ];
    }
}
