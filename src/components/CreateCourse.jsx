import Button from './Button';
import Input from './Input';

import { useState } from 'react';

import './CreateCourse.css';

function CreateCourse() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [author, setAuthor] = useState('');
    const [duration, setDuration] = useState(0);


    function convertDuration(min) {
        if(min === 0) {
            return "00:00";
        }
        const mm = min % 60;
        const hh = (min - mm) / 60;
        return (hh < 10 ? "0" : "") + hh.toString() + ":" + (mm < 10 ? "0" : "") + mm.toString();
    }

    function createAuthorList() {
        return "Author list is empty";
    }

    return (
        <div>
            <div>
                <Input 
                    labelText="Title"
                    placeholderText="Enter title..."
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <Button 
                    buttonText="Create course"
                    buttonClick={() => { console.log("Click Create course") } }
                />
            </div>
            <label>
                Description 
                <textarea 
                    rows="5"
                    minLength="2"
                    placeholder="Enter description" 
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />

            </label>
            <div>
                <div>
                    <div>
                        <h3>Add author</h3>
                        <Input 
                            labelText="Author name"
                            placeholderText="Enter author name..."
                            type="text"
                            value={author}
                            onChange={e => setAuthor(e.target.value)}
                        />
                        <Button 
                            buttonText="Create author"
                            buttonClick={() => { console.log("Click Create author") } }
                        />
                    </div>
                    <div>
                    <h3>Duration</h3>
                        <Input 
                            labelText="Duration"
                            placeholderText="Enter duration in minutes..."
                            type="number"
                            value={duration}
                            onChange={e => setDuration(e.target.value)}
                        />
                        <p>
                            Duration: {convertDuration(duration)} hours
                        </p>
                    </div>
                </div>
                <div>
                    <h3>Authors</h3>
                    <div>
                        <p>Name Author</p>
                        <Button 
                            buttonText="Add author"
                            buttonClick={() => { console.log("Click Add author") } }
                        />
                    </div>
                    <h3>Course authors</h3>
                    <p>{createAuthorList()}</p>
                </div>
            </div>
        </div>
    );
}

export default CreateCourse;