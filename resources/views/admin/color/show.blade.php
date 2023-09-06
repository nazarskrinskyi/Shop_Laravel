@extends('layouts.admin')

@section('content')
    <div>
        <h1 class="text-center">{{ $color->title }}</h1>
        <a class="btn btn-warning mb-3" href="{{ route('admin.color.edit', $color->id) }}">Edit Color</a>

        <form method="POST" action="{{ route('admin.color.delete', $color->id) }}"
              class="d-inline-block">
            @csrf
            @method('DELETE')
            <button type="submit" class="btn btn-danger mb-3"
                    onclick="return confirm('Are you sure?')">Delete
            </button>
        </form>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Title</th>
                <th scope="col">Color</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">{{ $color->id }}</th>
                <td>{{ $color->title }}</td>
                <td><div style="width: 16px; height: 16px; background: {{ '#' . $color->title }}"></div></td>
            </tr>

            </tbody>
        </table>
    </div>
@endsection
