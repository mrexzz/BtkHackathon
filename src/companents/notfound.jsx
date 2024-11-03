import MovingComponent from 'react-moving-text';

export default function NotfoundComp() {
    return (
        <>
            <MovingComponent
                type="bounce"
                duration="1000ms"
                delay="0s"
                direction="normal"
                timing="ease"
                iteration="infinite"
                fillMode="none">
                404 Not Found
            </MovingComponent>
        </>
    )
}
