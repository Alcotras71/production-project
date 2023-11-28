import { fireEvent, screen } from '@testing-library/react';

import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { Sidebar } from './Sidebar';

jest.mock('axios', () => {
    return {
        create: () => {
            return {
                interceptors: {
                    request: { eject: jest.fn(), use: jest.fn() },
                    response: { eject: jest.fn(), use: jest.fn() },
                },
            };
        },
    };
});

describe('Sidebar', () => {
    test('check render', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('check render', () => {
        componentRender(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
