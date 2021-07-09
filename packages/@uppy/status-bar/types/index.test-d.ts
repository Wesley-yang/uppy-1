import StatusBar from '../'
import Uppy from '@uppy/core'

{
 const uppy = new Uppy()
 uppy.use(StatusBar, {
    replaceTargetContent: false,
    target: 'body',
    showProgressDetails: true,
    hideUploadButton: false,
    hideAfterFinish: false,
    hideRetryButton: false,
    hidePauseResumeButton: false,
    hideCancelButton: false,
    doneButtonHandler: () => {},
    locale: {
      strings: {
        uploading: '',
        upload: '',
        complete: '',
        uploadFailed: '',
        paused: '',
        retry: '',
        retryUpload: '',
        cancel: '',
        pause: '',
        resume: '',
        done:'' ,
        filesUploadedOfTotal: '',
        dataUploadedOfTotal: '',
        xTimeLeft: '',
        uploadXFiles: '',
        uploadXNewFiles: '',
        xMoreFilesAdded: '',
      }
    }
 })
}
