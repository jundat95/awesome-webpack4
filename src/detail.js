import lodash from 'lodash';
import { Component, Input, ViewChild, ChangeDetectorRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';

function component() {
    const element = document.createElement('div');
    element.innerHTML = lodash.join(['Hello', 'webpack  111'], ' ');
    element.classList.add('hello');

    return element;
}

document.body.appendChild(component());