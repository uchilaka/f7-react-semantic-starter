import React, { Component } from 'react';
import {
    Form,
    Header,
    Divider,
    Container
} from 'semantic-ui-react';

const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
];

class SemanticFormInputView extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {};
    };

    handleChange = (e, { value }) => this.setState({ value });

    render() {
        const { value } = this.state;
        return (
            <Container>
                <Header>This is an example form</Header>
                <Divider horizontal={true}>This is some other stuff</Divider>
                <Form>
                    <Form.Group widths='equal'>
                        <Form.Input label='First name' placeholder='First name' />
                        <Form.Input label='Last name' placeholder='Last name' />
                        <Form.Select label='Gender' options={options} placeholder='Gender' />
                    </Form.Group>
                    <Form.Group inline>
                        <label>Size</label>
                        <Form.Radio label='Small' value='sm' checked={value === 'sm'} onChange={this.handleChange} />
                        <Form.Radio label='Medium' value='md' checked={value === 'md'} onChange={this.handleChange} />
                        <Form.Radio label='Large' value='lg' checked={value === 'lg'} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.TextArea label='About' placeholder='Tell us more about you...' />
                    <Form.Checkbox label='I agree to the Terms and Conditions' />
                    <Form.Button>Submit</Form.Button>
                </Form>
            </Container>
        );
    }
};

export const SemanticForm = SemanticFormInputView;