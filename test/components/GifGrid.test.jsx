import { render, screen } from '@testing-library/react';
import { GifGrid } from "../../src/components/GifGrid";


describe('pruebas en GifGrid', () => { 

    test('debe de mostrar el loading inicialmente', () => { 

        const category = 'One Punch';

        render( <GifGrid category= {category}/> );
        expect( screen.getByText('Cargando...') );
        expect( screen.getByText( category ) );
        // screen.debug();

     });


 })