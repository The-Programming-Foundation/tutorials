import React, {Component} from 'react';
import styles from './VirtualMachines.module.css';
import ReactModal from 'react-modal-resizable-draggable';

class VirtualMachines extends Component {

    constructor() {
        super();

        this.state = {
            modalIsOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }


    openModal() {
        this.setState({modalIsOpen: true});
    }
    closeModal() {
        this.setState({modalIsOpen: false});
    }

    render() {
        return (
            <div className="VirtualMachines">
                <button onClick={this.openModal}>
                    Open modal
                </button>
                <ReactModal 
                    initWidth={800} 
                    initHeight={400} 
                    onFocus={() => console.log("Modal is clicked")}
                    className={"my-modal-custom-class"}
                    onRequestClose={this.closeModal} 
                    isOpen={this.state.modalIsOpen}>
                    <h3>My Modal</h3>
                    <div className="body">
                        <p>This is the modal&apos;s body.</p>
                    </div>
                    <button onClick={this.closeModal}>
                        Close modal
                    </button>
                </ReactModal>
            </div>
        );
    }
}

export default VirtualMachines;