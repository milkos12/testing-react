import VisualizationSelector from "../VisualizationSelector";
import { render, screen } from "@testing-library/react";

const currentVisualization = 'alluvial';
const type = 'country';

const set = () => {

}

describe('Visualization selector', ()=> {
    test('initial render', () => {
        render(<VisualizationSelector setCurrentVisualization={set} currentVisualization={currentVisualization} type={type} />);
        screen.debug();
    });

    test('should be show button for exante', () => {
        render(<VisualizationSelector setCurrentVisualization={set} currentVisualization={currentVisualization} type={type} />);
        screen.getByRole('button', { name: 'Ex-Ante' });
    });
});
