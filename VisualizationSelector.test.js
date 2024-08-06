import VisualizationSelector from "./VisualizationSelector";
import { render, screen } from "@testing-library/react";



describe('Visualization selector', ()=> {
    test('initial render', () => {
        render(<VisualizationSelector />);
        screen.debug();
    });
});
