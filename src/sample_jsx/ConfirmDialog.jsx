import Button from './Button';

function ConfirmDialog(){
    return(
        <div class="container">
            <div>
                <p>확인 버튼을 눌러주세요</p>
                <Button color='green'>확인</Button>
                &nbsp;&nbsp;&nbsp;
                <button class='btn btn-primary'>DOM Button</button>
            </div>
        </div>
    );
}

export default ConfirmDialog;