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
        //this.renderButton = this.renderButton.bind(this);
        //this.renderButtonBlockByStyleKey = this.renderButtonBlockByStyleKey.bind(this);

        this.state = {
            colorHistory: [],
            colors: 'red orange yellow olive green teal blue violet purple pink brown grey black facebook instagram linkedin twitter vk youtube'.split(' '),
            buttons: {
                sizes: 'mini tiny small medium large big huge massive'.split(' ')
            },
            buttonsToRender: {}
        };
        this.state.colors.push('google plus');
    }

    componentDidMount() {
        // build buttons 
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

        //let buildButtonJobs = [];
        let buttonsToRender = {
            basic: [],
            fluid: [],
            default: []
        };
        let buttonStyles = Object.keys(buttonsToRender);

        buttonStyles.forEach((style) => {
            /*
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
                    buttonsToRender[style].push(newButton);
                    return yep(newButton);
                });
            }));
            */
            // go through button sizes and colors 
            this.state.buttons.sizes.forEach((buttonSize, at) => {
                const newButton = {
                    key: at + 1,
                    size: buttonSize,
                    color: pickRandomizedUniqueIn10SampleColor()
                };
                newButton[style] = true;
                // add button
                buttonsToRender[style].push(newButton);
                //return yep(newButton);
            });
        });
        /*
        Promise.all(buildButtonJobs)
            .then(() => {
                console.info('Color history -> %o', colorHistory);
                console.info('Built buttons -> %o', buttonsToRender);
                // update state
                this.setState({
                    buttonsToRender: buttonsToRender
                });
            });
        */
        console.info('Color history -> %o', colorHistory);
        console.info('Built buttons -> %o', buttonsToRender);
        this.setState({
            buttonsToRender: buttonsToRender
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
        if (!attrs.key) attrs.key = (new Date()).getTime();
        return (
            <div key={`button-${attrs.key}`}><Button {...attrs}>{color.toUpperCase()} {size} button</Button></div>
        );
    }



    renderButtonBlockByStyleKey(styleKey) {
        //console.info('Will render button block: %s', styleKey);
        return (
            <ContentBlock key={styleKey}>
                <ContentBlockTitle>(PROGRAMMATIC) {styleKey.toUpperCase()} BUTTONS</ContentBlockTitle>
                <ContentBlock inner>
                    {this.state.buttonsToRender[styleKey].map((attrs, at) => {
                        //console.info('Button attrs -> %o', attrs);
                        //if (!attrs.key) attrs.key = (new Date()).getTime();
                        return (<div key={`btn-${attrs.key}`}><Button {...attrs}>{attrs.color.toUpperCase()} {attrs.size} button</Button></div>)
                    })}
                </ContentBlock>
            </ContentBlock>
        );
    }

    componentWillUpdate() {
        console.info(':componentWillUpdate()');
    }

    render() {
        const buttonStyleKeys = Object.keys(this.state.buttonsToRender);
        console.info('Style keys -> %o', buttonStyleKeys);
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

                {buttonStyleKeys.map((styleKey, at) => this.renderButtonBlockByStyleKey(styleKey))}

            </Page>
        );
    }
};

export const SemanticKitchenSink = SemanticKitchenSinkView;