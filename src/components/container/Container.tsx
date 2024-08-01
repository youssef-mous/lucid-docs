// Note: Container component
import { Container as MuiContainer } from '@mui/material';





const Container = ({ children }: { children: React.ReactNode }) => {
    return (
        <MuiContainer sx={{overflow:'scroll'}}> {children}</MuiContainer>
    );
}
export default Container;