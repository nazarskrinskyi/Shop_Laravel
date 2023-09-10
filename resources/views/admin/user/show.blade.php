@extends('layouts.admin')

@section('content')

    <div>
        <h1 class="text-center">{{ $user->name }}</h1>
        <div class="text-right">

        <a class="btn btn-warning mb-3" href="{{ route('admin.user.edit', $user->id) }}">Edit</a>
        <form method="POST" action="{{ route('admin.user.delete', $user->id) }}"
              class="d-inline-block">
            @csrf
            @method('DELETE')
            <button type="submit" class="btn btn-danger mb-3"
                    onclick="return confirm('Are you sure?')">Delete
            </button>
        </form>
        </div>
        <table class="table">
            <tbody>
            <tr class="col">
                <th scope="col">ID</th>
                <td class="text-center">{{ $user->id }}</td>
            </tr>
            <tr>
                <th scope="col">Name</th>
                <td class="text-center">{{ $user->name }}</td>
            </tr>
            <tr>
                <th scope="col">Surname</th>
                <td class="text-center">{{ $user->surname }}</td>

            </tr>
            <tr>
                <th scope="col">Patronymic</th>
                <td class="text-center">{{ $user->patronymic }}</td>

            </tr>
            <tr>
                <th scope="col">Age</th>
                <td class="text-center">{{ $user->age }}</td>
            </tr>
            <tr>
                <th scope="col">Gender</th>
                <td class="text-center">{{ $user->genderTitle }}</td>
            </tr>
            <tr>
                <th scope="col">Address</th>
                <td class="text-center">{{ $user->address }}</td>

            </tr>

            <tr>
                <th scope="col">Email</th>
                <td class="text-center">{{ $user->email }}</td>

            </tr>
            <tr>
                <th scope="col">Password</th>
                <td class="text-center">{{ $user->password }}</td>

            </tr>

            </tbody>
        </table>

    </div>
@endsection
