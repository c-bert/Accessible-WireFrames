function triggerModal(event) {
    $('#modal-placeholder').append(`<!-- Modal -->
    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">You like big butts!</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p>AND YOU CANNOT LIE!</p>
                    <img class="img-corgi-butt" src="/Corgi-ButtCOLOR.png" alt="humorous icon of a cartoon corgi butt"/>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" data-dismiss="modal">Save Butt Preferences</button>
                </div>
            </div>
        </div>
    </div>`);
}