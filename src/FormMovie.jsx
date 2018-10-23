import React, { Component } from 'react';
import './FormMovie.css'

class FormMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            poster: "",
            comment: "",

        }


        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.getSend = this.getSend.bind(this);

    }

    submitForm(current) {
        current.preventDefault();
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    getSend() {
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state),
        };

        const url = "http://92.175.11.66:3001/api/quests/movies/";

        fetch(url, config)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    alert(res.error);
                } else {
                    alert(`Film envoyé avec l'ID ${res}!`);
                }
            }).catch(e => {
                console.error(e);
                alert('Erreur lors de l\'ajout d\'un employé');
            });

    }


    render() {
        return (


            < div className="FormEmployee" >
                <h1>Saisi d'un film</h1>

                <form onSubmit={this.submitForm}>
                    <fieldset>
                        <legend>Informations</legend>
                        <div className="form-data">
                            <label htmlFor="name">Name of the Movie</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                onChange={this.onChange}
                                value={this.state.name}
                            />
                        </div>

                        <div className="form-data">
                            <label htmlFor="firstname">Upload image url</label>
                            <input
                                type="url"
                                id="poster"
                                name="poster"
                                onChange={this.onChange}
                                value={this.state.poster}
                            />
                        </div>

                        <div className="form-data">
                            <label htmlFor="comment">Comment: </label>
                            <textarea
                                type="text"
                                id="comment"
                                name="comment"
                                onChange={this.onChange}
                                value={this.state.comment}
                            />
                        </div>
                        <hr />
                        <div className="form-data">
                            <input onClick={this.getSend} type="submit" value="Envoyer" />
                        </div>
                    </fieldset>
                </form >
            </div >);
    }
}

export default FormMovie;