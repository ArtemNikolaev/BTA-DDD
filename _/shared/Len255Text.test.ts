import {Len255Text} from "./Len255Text";

describe('Len255Text type', () => {
    const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur, leo eu aliquet lacinia, ipsum nunc sagittis neque, a elementum dolor odio at odio. Vivamus quis elit justo. Fusce in odio ac mi maximus tempus a vitae lorem. Curabitur volutpat tortor a congue ultrices. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In fringilla lacinia faucibus. Aenean finibus hendrerit ipsum vel aliquet. Pellentesque sed nisl et lectus rutrum commodo a eu lacus. Suspendisse potenti. Ut maximus auctor turpis et pharetra. Quisque et elit ex.';

    [
        loremIpsum[0],
        loremIpsum.slice(0, 255)
    ].forEach(str => {
        it(`should be correct for '${str.length < 5 ? str : str.slice(0, 5) + '...'}' - ${str.length} length`, () => {
            expect(Len255Text.make(str)).toBeInstanceOf(Len255Text);
        })
    });

    [
        '',
        loremIpsum.slice(0, 256),
    ].forEach(str => {
        it(`should throw for '${str.length < 5 ? str : str.slice(0, 5) + '...'}' - ${str.length} length`, () => {
            expect(() => Len255Text.make(str)).toThrow();
        })
    });

});