import React from 'react';
import {
    Page,
    Navbar,
    //NavLeft, NavCenter,
    ContentBlockTitle,
    ContentBlock,
    //Link
} from 'framework7-react';
import {
    Container,
    Header,
    Button,
    Divider
} from 'semantic-ui-react';

class SemanticKitchenSinkView extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            colorHistory: [],
            colors: 'red orange yellow olive green teal blue violet purple pink brown grey black facebook instagram linkedin twitter vk youtube'.split(' '),
            buttons: {
                sizes: 'mini tiny small medium large big huge massive'.split(' ')
            },
            buttonsToRender: {
                basic: [],
                fluid: [],
                default: []
            }
        };
        this.state.colors.push('google plus');
        // build buttons 
        let buttonStyles = Object.keys(this.state.buttonsToRender);
        let colorHistory = [];
        const _c = this;

        const pickRandomizedUniqueIn10SampleColor = () => {
            let pickedColor = _c.getRandomColor();
            // reference current value for history
            let history = colorHistory.slice(0);
            if (history.length) {
                // last 10 elements in sequence
                let historySample = history.slice(-10);
                //console.info('Color history sample -> %o', historySample);
                while (historySample.indexOf(pickedColor) > -1) {
                    pickedColor = _c.getRandomColor();
                }
            }
            history.push(pickedColor);
            // update color history
            colorHistory = history;
            // update state in constructor (not using setState)
            return pickedColor;
        };

        let buildButtonJobs = [];

        buttonStyles.forEach((style) => {
            buildButtonJobs.push(new Promise((yep, nope) => {
                // go through button sizes and colors 
                this.state.buttons.sizes.forEach((buttonSize, at) => {
                    const newButton = {
                        key: at + 1,
                        size: buttonSize,
                        color: pickRandomizedUniqueIn10SampleColor()
                    };
                    newButton[style] = true;
                    // add button
                    this.state.buttonsToRender[style].push(newButton);
                    return yep(newButton);
                });
            }));
        });
        Promise.all(buildButtonJobs)
            .then(() => {
                console.info('Color history -> %o', colorHistory);
                console.info('Built buttons -> %o', this.state.buttonsToRender);
            });
    }

    getRandomColor() {
        return this.state.colors[Math.round(Math.random() * (this.state.colors.length - 1))];
    }
    /*
    pickRandomizedUniqueColor() {
        let pickedColor = this.getRandomColor();
        let history = this.state.colorHistory.slice(0);
        if (history.length) {
            let historySample = history.slice(-11, -1);
            console.info('Color history -> %o', history);
            console.info('Color history sample -> %o', historySample);
            while (historySample.indexOf(pickedColor) > -1) {
                pickedColor = this.getRandomColor();
            }
        }
        history.push(pickedColor);
        this.setState({ colorHistory: history });
        return pickedColor;
    }
    */
    renderButton(color, size, attrs) {
        return (
            <Button {...attrs}>{color.toUpperCase()} {size} button</Button>
        );
    }

    render() {
        return (
            <Page>
                <Navbar title="Semantic UI KitchenSink" backLink="Back" sliding />
                <ContentBlockTitle>This is a section title</ContentBlockTitle>
                <ContentBlock inner>
                    This is some content to go here. Hello world!
                </ContentBlock>
                <ContentBlock inner>
                    <Header>Header</Header>
                    <div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.</div>
                </ContentBlock>

                <Container text>
                    <Divider horizontal>A Divider</Divider>
                    <Header>Container Only Content</Header>
                    This is some text, just in a container
                </Container>

                <ContentBlockTitle>Basic Buttons</ContentBlockTitle>
                <ContentBlock inner>
                    {/*Basic buttons*/}
                    {this.state.buttons.sizes.map((buttonSize, at) => {
                        const attrs = { basic: true, key: at + 1, size: buttonSize, color: this.getRandomColor() };
                        return <div key={attrs.key}>{this.renderButton(attrs.color, buttonSize, attrs)}</div>
                    })}
                </ContentBlock>

                <ContentBlockTitle>Default Buttons</ContentBlockTitle>
                <ContentBlock inner>
                    {/*Default buttons*/}
                    {this.state.buttons.sizes.map((buttonSize, at) => {
                        const attrs = { key: at + 1, size: buttonSize, color: this.getRandomColor() };
                        return <div key={attrs.key}>{this.renderButton(attrs.color, buttonSize, attrs)}</div>
                    })}
                </ContentBlock>

                <ContentBlockTitle>Fluid Buttons</ContentBlockTitle>
                <ContentBlock inner>
                    {/*Fluid buttons */}
                    {this.state.buttons.sizes.map((buttonSize, at) => {
                        const attrs = { fluid: true, key: at + 1, size: buttonSize, color: this.getRandomColor() };
                        return <div key={attrs.key}>{this.renderButton(attrs.color, buttonSize, attrs)}</div>
                    })}
                </ContentBlock>
            </Page>
        );
    }
};

export const SemanticKitchenSink = SemanticKitchenSinkView;