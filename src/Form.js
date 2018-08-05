import React, {Component} from 'react'
import './css/form.css'

class Form extends Comment {
    render() {
        return (
            <div className="form">
                <form>
                    <input name="title" type="text" placeholder="タイトル　※必須" defaultValue="reactの勉強" /><br/>
                    <textarea name="desc" placeholder="説明入力" defaultValue="todoアプリを作っています"></textarea>
                    <button type="submit">todoを製作</button>
                </form>
            </div>
        )
    }
}

export default Form