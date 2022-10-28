import { forwardRef, useCallback, useImperativeHandle, useState } from "react";
import Cropper from "react-easy-crop";
import "./imageCropper.scss";
import getCroppedImg from "./cropImage"

const ImageCropper = forwardRef((props: any, ref: any) => {
    const { editorConfig, IMG } = props;
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedArea, setCroppedArea] = useState(null);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
    // The component instance will be extended with whatever you return from the callback passed as the second argument
    useImperativeHandle(ref, () => ({
        getCroppedImage() {
            return getCroppedImage()
        }
    }))

    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels)
    }, [])

    const getCroppedImage = useCallback(async () => {
        try {
            return await getCroppedImg(IMG, croppedAreaPixels)
        } catch (e) {
            console.error(e)
        }
    }, [croppedAreaPixels])

    const Output = ({ croppedArea }) => {
        const scale = 100 / croppedArea.width;
        const transform = {
            x: `${-croppedArea.x * scale}%`,
            y: `${-croppedArea.y * scale}%`,
            scale,
            width: "calc(100% + 0.5px)",
            height: "auto"
        };

        const imageStyle = {
            transform: `translate3d(${transform.x}, ${transform.y}, 0) scale3d(${transform.scale},${transform.scale},1)`,
            width: transform.width,
            height: transform.height
        };

        return (
            <div
                className="output"
                style={{ paddingBottom: `${100 / editorConfig.aspectRatio}%` }}
            >
                <img src={IMG} alt="" style={imageStyle} />
            </div>
        );
    };
    return (
        <div className="image-cropper-wrap">
            <div className="cropper">
                <Cropper
                    image={IMG}
                    aspect={editorConfig.aspectRatio}
                    crop={crop}
                    zoom={zoom}
                    // cropSize={{ width: 300, height: 200 }}
                    onCropChange={setCrop}
                    onZoomChange={setZoom}
                    onCropComplete={onCropComplete}
                    onCropAreaChange={(croppedArea) => {
                        setCroppedArea(croppedArea);
                    }}
                />
            </div>

            <div className="viewer">
                <div>{croppedArea && <Output croppedArea={croppedArea} />}</div>
            </div>
            {/* 
            <div
                onClick={showCroppedImage}
            >
                Show Result
            </div> */}
        </div>
    );
})
export default ImageCropper;