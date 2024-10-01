export default function Tabs({ children, buttons, buttonsContainer="menu" }){
    const ButtonContainer = buttonsContainer;
    return<>
        <ButtonsContainer>
            {buttons}
        </ButtonsContainer>
        {children}
    </>
}