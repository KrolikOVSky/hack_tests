import React from 'react'
import testJson from './mainQuestions.json'
import EditTests from "./EditTests";
import { Redirect }  from 'react-router-dom'

/*let testJson = {
    ques1: {
        id: 1,
        name: "Question1",
        answer: [
            {title: '1res1!', flag: 1},
            {title: '1res2', flag: 0},
            {title: '1res3', flag: 0}
        ],

    },

    ques2: {
        id: 2,
        name: "Question2",
        answer: [
            {title: '2res1', flag: 0},
            {title: '2res2!', flag: 1},
            {title: '2res3', flag: 0}
        ],
    },

    ques3: {
        id: 3,
        name: "Question3",
        answer: [
            {title: '3res1', flag: 0},
            {title: '3res2', flag: 0},
            {title: '3res3!', flag: 1}
        ],
    }
}*/

// let res;


export default class Tests extends React.Component {
    constructor(props) {
        super(props);
        this.resultHandler = this.resultHandler.bind(this)
    }

    resultHandler(e){
        e.preventDefault();
        let resInputs = document.querySelectorAll("input[type='radio']:checked")
        let result = 0;
        let res = [];
        Array.prototype.map.call(resInputs, (el)=>{
            result +=parseInt(el.value);
            res.push(el.id)
            console.log("id = "+el.id)
        })

        Array.prototype.map.call(res, (elemen) =>{
            console.log("elem = " + elemen)
        })

        console.log("result = " + result);
        console.log("res = " + res);
        this.setState({
            referrer:'/result',
            results: res
        })
        // console.log(resInputs)
    }

    state = {
        questions: [],
        referrer:null,
        results: []
    }

    componentDidMount() {
        this.setState({testJson})
    }

    render() {
        let j = 0;
        let count = 1;
        const {referrer} = this.state;
        if (referrer) return <Redirect to={() => <EditTests />} />;
        return (
            <div>
                <div align='center' className="container border border-dark">
                    <form className="border border-dark">
                        {Object.keys(testJson).map(item => (
                            <div>
                                <h2 key={testJson[item].id}>{count++}) {testJson[item].name}</h2>

                                {
                                    testJson[item].answer.map(items => (
                                        j++,
                                        <div>
                                            {console.log(testJson[item].id + j)}
                                            <input type="radio" value={items.flag}  id={testJson[item].id + j} name={testJson[item].name}/>
                                            <label htmlFor={testJson[item].id + j}>{items.title}</label>
                                        </div>
                                    ))
                                }
                            </div>
                        ))}
                        <a href="/results" className="btn btn-success" type="submit" onClick={this.resultHandler}>Отправить</a>
                    </form>
                </div>
            </div>
        );
    }
}