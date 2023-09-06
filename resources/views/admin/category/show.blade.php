@extends('layouts.admin')

@section('content')
    <div>
        <h1 class="text-center">{{ $category->title }}</h1>
        <a class="btn btn-warning mb-3" href="{{ route('admin.category.edit', $category->id) }}">Edit Category</a>
        <form method="POST" action="{{ route('admin.category.delete', $category->id) }}"
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
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">{{ $category->id }}</th>
                <td>{{ $category->title }}</td>
            </tr>

            </tbody>
        </table>
    </div>
@endsection
