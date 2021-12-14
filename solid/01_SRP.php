<?php

// SRP - single responsibility principle

class PostsConverter
{
    public $post;

    public function __construct($post)
    {
        $this->post = $post;
    }

    public function toJSON()
    {
        return json_encode([
            $this->post->getTitle(),
            $this->post->getContent()
        ]);
    }

    public function toXML()
    {
        return '
        <post>
            <title>' . $this->post->getTitle() . '</title>
            <content>' . $this->post->getContent() . '</content>
        </post>
        ';
    }
}

class Posts
{
    private $title;
    private $content;

    public function __construct($title, $content)
    {
        $this->title = $title;
        $this->content = $content;
    }

    public function getTitle()
    {
        return $this->title;
    }

    public function getContent()
    {
        return $this->content;
    }

}

$post = new Posts('Hello world', 'This is my first post');

$post_json = new PostsConverter($post);


var_dump($post_json->toJSON());
var_dump($post_json->toXML());