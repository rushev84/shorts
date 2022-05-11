<?php
// все объекты:
$posts = Post::all();

// найти объект по айдишнику:
$post = Post::find(1);

// найти объект по айдишнику, учитывая также "мусорные" (удалённые с софт-делит):
$post = Post::withTrashed()->find(2);

// восстановить объект
$post->restore();

// найти объект с определённым значением атрибута, вернуть его (первый попавшийся). Если такого нет - то создать с перечнем атрибутов.
// Аналогично работает updateOrCreate()
$post = Post::firstOrCreate([
    // проверка
    'title' => 'title from phpstorm 2'
], [
    // что добавить в новый объект
    'content' => 'new content',
    'likes' => 500
]);

// получить объекты с условием:
$posts = Post::where('is_published', 1)->get();

// получить первый объект с условием:
$post = Post::where('is_published', 1)->first();

// разрешить массовое добавление данных. В модели пишем:
protected $guarded = [];

// работа с миграциями:
$table->text('description')->nullable()->after('content');
$table->dropColumn('description');
$table->renameColumn('content', 'post_content');
$table->string('post_content')->change(); // изменить тип данных
Schema::dropIfExists('posts');





