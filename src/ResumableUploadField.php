<?php

namespace Hsharghi\ResumableUploadField;

use Laravel\Nova\Fields\Field;

class ResumableUploadField extends Field
{
    /**
     * The field's component.
     *
     * @var string
     */
    public $component = 'resumable-upload-field';

//    public $uploadUrl = '';
//    public $apiUrl = '';

    public function apiUrl($url)
    {
        return $this->withMeta([
            'apiUrl' => $url,
        ]);
    }


    public function uploadUrl($url)
    {
        return $this->withMeta([
            'uploadUrl' => $url,
        ]);
    }
}
