@extends('layouts.admin')
@section('content')
    <div>
        <a class="btn btn-primary mb-3" href="{{ route('admin.color.create') }}">Create Color</a>

        <table class="table"  style="border: 2px solid #1b1e21">
            <thead>
            <tr class="text-center" style="border: 4px solid #1b1e21">
                <th scope="col">ID</th>
                <th scope="col">Title</th>
                <th scope="col">Color</th>
                <th scope="col">Action</th>
            </tr>
            </thead>
            <tbody>
            @foreach($colors as $color)
                <tr  style="border: 2px solid darkgrey">
                    <th class="text-center" scope="row">{{ $color->id }}</th>
                    <td class="text-center"><a href="{{ route('admin.color.show', $color->id) }}">{{ $color->title }}</a></td>
                    <td style="text-align: center;">
                        <div style="width: 20px; height: 20px; background: {{ '#' . $color->title }}; display: inline-block; vertical-align: middle;"><!-- Your content here --></div>
                    </td>
                    <td class="text-center">
                        <a href="{{ route('admin.color.edit', $color->id) }}"
                           class="btn btn-sm btn-outline-primary">Edit</a>
                        <form method="POST" action="{{ route('admin.color.delete', $color->id) }}"
                              class="d-inline-block">
                            @csrf
                            @method('DELETE')
                            <button type="submit" class="btn btn-sm btn-outline-danger"
                                    onclick="return confirm('Are you sure?')">Delete
                            </button>
                        </form>
                    </td>
                </tr>
            @endforeach

            </tbody>
            {{ $colors->links() }}

        </table>

    </div>
@endsection
