@extends('layouts.admin')

@section('content')

    <h1 class="text-center">Edit User</h1>
    <div class="row justify-content-center mt-4">
        <div class="col-lg-6 col-md-8 col-sm-10">
            <form method="POST" action="{{ route('admin.user.update',$user->id) }}" enctype="multipart/form-data">
                @csrf
                @method('PATCH')
                <div class="mb-3 col-12 row justify-content-between">
                    <div class="col-6">
                        <label for="name" class="form-label">Username</label>
                        <input type="text" id="name" autocomplete="on" class="form-control" name="name"
                               placeholder="username..." value="{{ $user->name ?? old('name')}}">
                        @error('name')
                        <strong class="text-danger">{{ $message }}</strong>
                        @enderror
                    </div>
                    <div class="col-6">
                        <label for="surname" class="form-label">Surname</label>
                        <input type="text" id="surname" autocomplete="on" class="form-control" name="surname"
                               placeholder="surname..." value="{{ $user->surname ?? old('surname') }}">
                        @error('surname')
                        <strong class="text-danger">{{ $message }}</strong>
                        @enderror
                    </div>
                </div>

                <div class="mb-3 col-12 row justify-content-between">
                    <div class="col-6">
                        <label for="age" class="form-label">Age</label>
                        <input type="number" id="age" autocomplete="on" min="10" max="100" class="form-control" name="age"
                               placeholder="age..." value="{{ $user->age ?? old('age') }}">
                        @error('age')
                        <strong class="text-danger">{{ $message }}</strong>
                        @enderror
                    </div>
                    <div class="col-6">
                        <label for="patronymic" class="form-label">Patronymic</label>
                        <input type="text" id="patronymic" autocomplete="on" class="form-control" name="patronymic"
                               placeholder="patronymic..." value="{{ $user->patronymic ?? old('patronymic') }}">
                        @error('patronymic')
                        <strong class="text-danger">{{ $message }}</strong>
                        @enderror
                    </div>
                </div>

                <div class="mb-3 col-12 row justify-content-between">
                    <div class="col-6">
                        <label for="address" class="form-label">Address</label>
                        <input type="text" id="address" autocomplete="on" class="form-control" name="address"
                               placeholder="address..." value="{{ $user->address ?? old('address') }}">
                        @error('address')
                        <strong class="text-danger">{{ $message }}</strong>
                        @enderror
                    </div>
                    <div class="col-6">
                        <label for="gender" class="form-label">Gender</label>
                        <select id="gender" class="form-control" name="gender">
                            <option disabled selected>Choose Gender</option>

                            <option {{ $user->gender == 1 ? 'selected' : '' }} value="1">Male</option>
                            <option {{ $user->gender == 2 ? 'selected' : '' }} value="2">Female</option>
                        </select>
                        @error('gender')
                        <strong class="text-danger">{{ $message }}</strong>
                        @enderror
                    </div>
                </div>

                <button type="submit" class="btn btn-primary mt-2">Edit</button>
            </form>
        </div>
    </div>
@endsection
