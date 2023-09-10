@extends('layouts.admin')

@section('content')
    <div>
        <h1 class="text-center">{{ $color->title }}</h1>
        <div class="text-right">
            <a class="btn btn-warning mb-3" href="{{ route('admin.color.edit', $color->id) }}">Edit Color</a>

            <form method="POST" action="{{ route('admin.color.delete', $color->id) }}"
                  class="d-inline-block">
                @csrf
                @method('DELETE')
                <button type="submit" class="btn btn-danger mb-3"
                        onclick="return confirm('Are you sure?')">Delete
                </button>
            </form>
        </div>
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
                <td style="text-align: left;">
                    <div
                        style="width: 20px; height: 20px; background: {{ '#' . $color->title }}; display: inline-block; vertical-align: middle;">
                        <!-- Your content here --></div>
                </td>
            </tr>

            </tbody>
        </table>
    </div>
@endsection
