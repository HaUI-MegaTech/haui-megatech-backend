import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { getProductDetail, updateProduct } from "../../services/ProductService";
import { toast } from "react-toastify";

function UpdateProductModal(props) {
    const { show, handleClose, targetItem, handleUpdateTable } = props;

    const [data, setData] = useState();

    const [name, setName] = useState();
    const [oldPrice, setOldPrice] = useState();
    const [currentPrice, setCurrentPrice] = useState();
    const [discountPercent, setDiscountPercent] = useState();
    const [remaining, setRemaining] = useState();
    const [processor, setProcessor] = useState();
    const [cores, setCores] = useState();
    const [threads, setThreads] = useState();
    const [frequency, setFrequency] = useState();
    const [boostFrequency, setBoostFrequency] = useState();
    const [cacheCapacity, setCacheCapacity] = useState();
    const [memoryCapacity, setMemoryCapacity] = useState();
    const [memoryType, setMemoryType] = useState();
    const [memoryBus, setMemoryBus] = useState();
    const [maxMemoryCapacity, setMaxMemoryCapacity] = useState();
    const [storage, setStorage] = useState();
    const [displaySize, setDisplaySize] = useState();
    const [resolution, setResolution] = useState();
    const [refreshRate, setRefreshRate] = useState();
    const [colorGamut, setColorGamut] = useState();
    const [panelType, setPanelType] = useState();
    const [touchScreen, setTouchScreen] = useState();
    const [graphicsCard, setGraphicsCard] = useState();
    const [soundTechnology, setSoundTechnology] = useState();
    const [wirelessConnectivity, setWirelessConnectivity] = useState();
    const [sdCard, setSdCard] = useState();
    const [webcam, setWebcam] = useState();
    const [coolingFan, setCoolingFan] = useState();
    const [miscFeature, setMiscFeature] = useState();
    const [backlitKeyboard, setBacklitKeyboard] = useState();
    const [dimensionWeight, setDimensionWeight] = useState();
    const [material, setMaterial] = useState();
    const [batteryCapacity, setBatteryCapacity] = useState();
    const [chargerCapacity, setChargerCapacity] = useState();
    const [os, setOs] = useState();
    const [launchDate, setLaunchDate] = useState();

    useEffect(() => {
        initData();
    }, [targetItem]);

    const initData = () => {
        setName(targetItem.name);
        setOldPrice(targetItem.oldPrice);
        setCurrentPrice(targetItem.currentPrice);
        setDiscountPercent(targetItem.discountPercent);
        setRemaining(targetItem.remaining);
        setProcessor(targetItem.processor);
        setCores(targetItem.cores);
        setThreads(targetItem.threads);
        setFrequency(targetItem.frequency);
        setBoostFrequency(targetItem.boostFrequency);
        setCacheCapacity(targetItem.cacheCapacity);
        setMemoryCapacity(targetItem.memoryCapacity);
        setMemoryType(targetItem.memoryType);
        setMemoryBus(targetItem.memoryBus);
        setMaxMemoryCapacity(targetItem.maxMemoryCapacity);
        setStorage(targetItem.storage);
        setDisplaySize(targetItem.displaySize);
        setResolution(targetItem.resolution);
        setRefreshRate(targetItem.refreshRate);
        setColorGamut(targetItem.colorGamut);
        setPanelType(targetItem.panelType);
        setTouchScreen(targetItem.touchScreen);
        setGraphicsCard(targetItem.graphicsCard);
        setSoundTechnology(targetItem.soundTechnology);
        setWirelessConnectivity(targetItem.wirelessConnectivity);
        setSdCard(targetItem.sdCard);
        setWebcam(targetItem.webcam);
        setCoolingFan(targetItem.coolingFan);
        setMiscFeature(targetItem.miscFeature);
        setBacklitKeyboard(targetItem.backlitKeyboard);
        setDimensionWeight(targetItem.dimensionWeight);
        setMaterial(targetItem.material);
        setBatteryCapacity(targetItem.batteryCapacity);
        setChargerCapacity(targetItem.chargerCapacity);
        setOs(targetItem.os);
        setLaunchDate(targetItem.launchDate);
    };

    const handleUpdateProduct = () => {
        updateProduct({
            id: targetItem.id,
            name,
            oldPrice,
            currentPrice,
            discountPercent,
            remaining,
            processor,
            cores,
            threads,
            frequency,
            boostFrequency,
            cacheCapacity,
            memoryCapacity,
            memoryType,
            memoryBus,
            maxMemoryCapacity,
            storage,
            displaySize,
            resolution,
            refreshRate,
            colorGamut,
            panelType,
            touchScreen,
            graphicsCard,
            soundTechnology,
            wirelessConnectivity,
            sdCard,
            webcam,
            coolingFan,
            miscFeature,
            backlitKeyboard,
            dimensionWeight,
            material,
            batteryCapacity,
            chargerCapacity,
            os,
            launchDate,
        })
            .then(response => {
                if (response && response.status === 200) {
                    toast.success(response.data.meta.message);
                    handleUpdateTable();
                    handleClose();
                }
            })
            .catch(error => {
                toast.error(error.response.data.meta.message);
            });
    };

    return (
        <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton className="bg-warning">
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <legend className="text-primary">Thông tin cơ bản</legend>
                <Form.Group className="mb-3" controlId="formId">
                    <Form.Label>Mã sản phẩm</Form.Label>
                    <Form.Control type="text" value={targetItem.id} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Tên sản phẩm</Form.Label>
                    <Form.Control
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formOldPrice">
                    <Form.Label>Giá cũ</Form.Label>
                    <Form.Control
                        type="text"
                        value={oldPrice}
                        onChange={e => setOldPrice(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formCurrentPrice">
                    <Form.Label>Giá mới</Form.Label>
                    <Form.Control
                        type="text"
                        value={currentPrice}
                        onChange={e => setCurrentPrice(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formDiscountPercent">
                    <Form.Label>Phần trăm giảm giá</Form.Label>
                    <Form.Control
                        type="text"
                        value={discountPercent}
                        onChange={e => setDiscountPercent(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formRemaining">
                    <Form.Label>Số lượng còn</Form.Label>
                    <Form.Control
                        type="text"
                        value={remaining}
                        onChange={e => setRemaining(e.target.value)}
                    />
                </Form.Group>

                <legend className="text-primary">CPU</legend>
                <Form.Group className="mb-3" controlId="formProcessor">
                    <Form.Label>Vi xử lý</Form.Label>
                    <Form.Control
                        type="text"
                        value={processor}
                        onChange={e => setProcessor(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formCores">
                    <Form.Label>Số nhân</Form.Label>
                    <Form.Control
                        type="text"
                        value={cores}
                        onChange={e => setCores(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formThreads">
                    <Form.Label>Số luồng</Form.Label>
                    <Form.Control
                        type="text"
                        value={threads}
                        onChange={e => setThreads(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formFrequency">
                    <Form.Label>Xung nhịp cơ bản</Form.Label>
                    <Form.Control
                        type="text"
                        value={frequency}
                        onChange={e => setFrequency(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBoostFrequency">
                    <Form.Label>Xung nhịp turbo</Form.Label>
                    <Form.Control
                        type="text"
                        value={boostFrequency}
                        onChange={e => setBoostFrequency(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formCacheCapacity">
                    <Form.Label>Dung lượng cache</Form.Label>
                    <Form.Control
                        type="text"
                        value={cacheCapacity}
                        onChange={e => setCacheCapacity(e.target.value)}
                    />
                </Form.Group>

                <legend className="text-primary">RAM và bộ nhớ trong</legend>
                <Form.Group className="mb-3" controlId="formMemoryCapacity">
                    <Form.Label>Dung lượng RAM</Form.Label>
                    <Form.Control
                        type="text"
                        value={memoryCapacity}
                        onChange={e => setMemoryCapacity(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMemoryType">
                    <Form.Label>Loại RAM</Form.Label>
                    <Form.Control
                        type="text"
                        value={memoryType}
                        onChange={e => setMemoryType(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMemoryBus">
                    <Form.Label>Bus RAM</Form.Label>
                    <Form.Control
                        type="text"
                        value={memoryBus}
                        onChange={e => setMemoryBus(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMaxMemoryCapacity">
                    <Form.Label>Bộ nhớ RAM tối đa</Form.Label>
                    <Form.Control
                        type="text"
                        value={maxMemoryCapacity}
                        onChange={e => setMaxMemoryCapacity(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formStorage">
                    <Form.Label>Bộ nhớ trong</Form.Label>
                    <Form.Control
                        type="text"
                        value={storage}
                        onChange={e => setStorage(e.target.value)}
                    />
                </Form.Group>

                <legend className="text-primary">Màn hình</legend>
                <Form.Group className="mb-3" controlId="formDisplaySize">
                    <Form.Label>Kích thước màn hình</Form.Label>
                    <Form.Control
                        type="text"
                        value={displaySize}
                        onChange={e => setDisplaySize(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formResolution">
                    <Form.Label>Độ phân giải</Form.Label>
                    <Form.Control
                        type="text"
                        value={resolution}
                        onChange={e => setResolution(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formRefreshRate">
                    <Form.Label>Tần số quét</Form.Label>
                    <Form.Control
                        type="text"
                        value={refreshRate}
                        onChange={e => setRefreshRate(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formColorGamut">
                    <Form.Label>Gam màu</Form.Label>
                    <Form.Control
                        type="text"
                        value={colorGamut}
                        onChange={e => setColorGamut(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPanelType">
                    <Form.Label>Công nghệ tấm nền</Form.Label>
                    <Form.Control
                        type="text"
                        value={panelType}
                        onChange={e => setPanelType(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formTouchScreen">
                    <Form.Label>Màn hình cảm ứng</Form.Label>
                    <Form.Control
                        type="text"
                        value={touchScreen}
                        onChange={e => setTouchScreen(e.target.value)}
                    />
                </Form.Group>

                <legend className="text-primary">Đồ hoạ và âm thanh</legend>
                <Form.Group className="mb-3" controlId="formGraphicsCard">
                    <Form.Label>Card đồ hoạ</Form.Label>
                    <Form.Control
                        type="text"
                        value={graphicsCard}
                        onChange={e => setGraphicsCard(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formSoundTechnology">
                    <Form.Label>Công nghệ âm thanh</Form.Label>
                    <Form.Control
                        type="text"
                        value={soundTechnology}
                        onChange={e => setSoundTechnology(e.target.value)}
                    />
                </Form.Group>

                <legend className="text-primary">
                    Kết nối và tính năng mở rộng
                </legend>
                <Form.Group
                    className="mb-3"
                    controlId="formWirelessConnectivity"
                >
                    <Form.Label>Kết nối không dây</Form.Label>
                    <Form.Control
                        type="text"
                        value={wirelessConnectivity}
                        onChange={e => setWirelessConnectivity(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formSdCard">
                    <Form.Label>Thẻ nhớ</Form.Label>
                    <Form.Control
                        type="text"
                        value={sdCard}
                        onChange={e => setSdCard(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formWebcam">
                    <Form.Label>Webcam</Form.Label>
                    <Form.Control
                        type="text"
                        value={webcam}
                        onChange={e => setWebcam(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formCoolingFan">
                    <Form.Label>Hệ thống tản nhiệt</Form.Label>
                    <Form.Control
                        type="text"
                        value={coolingFan}
                        onChange={e => setCoolingFan(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMiscFeature">
                    <Form.Label>Các tính năng khác</Form.Label>
                    <Form.Control
                        type="text"
                        value={miscFeature}
                        onChange={e => setMiscFeature(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBacklitKeyboard">
                    <Form.Label>Đèn bàn phím</Form.Label>
                    <Form.Control
                        type="text"
                        value={backlitKeyboard}
                        onChange={e => setBacklitKeyboard(e.target.value)}
                    />
                </Form.Group>

                <legend className="text-primary">
                    Kích thước và khối lượng
                </legend>
                <Form.Group className="mb-3" controlId="formDimensionWeight">
                    <Form.Label>Kích thước và khối lượng</Form.Label>
                    <Form.Control
                        type="text"
                        value={dimensionWeight}
                        onChange={e => setDimensionWeight(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMaterial">
                    <Form.Label>Chất liệu</Form.Label>
                    <Form.Control
                        type="text"
                        value={material}
                        onChange={e => setMaterial(e.target.value)}
                    />
                </Form.Group>

                <legend className="text-primary">Pin và sạc</legend>
                <Form.Group className="mb-3" controlId="formBatteryCapacity">
                    <Form.Label>Dung lượng pin</Form.Label>
                    <Form.Control
                        type="text"
                        value={batteryCapacity}
                        onChange={e => setBatteryCapacity(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formChargerCapacity">
                    <Form.Label>Công suất sạc</Form.Label>
                    <Form.Control
                        type="text"
                        value={chargerCapacity}
                        onChange={e => setChargerCapacity(e.target.value)}
                    />
                </Form.Group>

                <legend className="text-primary">Thông tin khác</legend>
                <Form.Group className="mb-3" controlId="formOs">
                    <Form.Label>Hệ điều hành</Form.Label>
                    <Form.Control
                        type="text"
                        value={os}
                        onChange={e => setOs(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formLaunchDate">
                    <Form.Label>Năm ra mắt</Form.Label>
                    <Form.Control
                        type="text"
                        value={launchDate}
                        onChange={e => setLaunchDate(e.target.value)}
                    />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Đóng
                </Button>
                <Button variant="warning" onClick={handleUpdateProduct}>
                    Lưu thay đổi
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default UpdateProductModal;
