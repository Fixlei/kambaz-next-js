export default function VariablesAndConstants() {
    //eslint-disable-next-line no-var
    var funcionaScoped = 2;
    //eslint-disable-next-line prefer-const
    let balockScoped = 5;
    const constant1 = funcionaScoped - balockScoped;
    return (
        <div id="wd-variables-and-constants">
            <h4> Variable and Constant Examples</h4>
            functionaScoped = {funcionaScoped}
            <br />
            balockScoped = {balockScoped}
            <br />
            constant1 = {constant1}
            <h1>Variables and Constants</h1>
        </div>
    );
}