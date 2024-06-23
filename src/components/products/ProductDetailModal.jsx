import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { getProductDetail } from "../../services/ProductService";

function ProductDetailModal(props) {
    const { show, handleClose, targetItem } = props;

    const [data, setData] = useState();

    useEffect(() => {
        getData(targetItem.id);
    }, [targetItem]);

    const getData = id => {
        getProductDetail(id)
            .then(res => {
                setData(res.data.data);
            })
            .catch(err => console.log(err));
    };

    console.log(targetItem);

    return (
        <>
            {data && (
                <Modal show={show} onHide={handleClose} size="lg">
                    <Modal.Header closeButton className="bg-info">
                        <Modal.Title>Product details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="d-flex justify-content-center">
                            <img
                                src={data.mainImageUrl}
                                alt="Profile"
                                className="img-thumbnail mb-3"
                            />
                        </div>

                        <h5 className="card-title">Thông tin cơ bản</h5>
                        <div className="row mb-2">
                            <div className="col-5 label ">Mã sản phẩm: </div>
                            <div className="col-7">{data.id}</div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-5 label ">Tên sản phẩm: </div>
                            <div className="col-7">{data.name}</div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-5 label ">Giá cũ: </div>
                            <div className="col-7">{data.oldPrice}</div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-5 label ">Giá mới: </div>
                            <div className="col-7">{data.currentPrice}</div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-5 label ">
                                Phần trăm giảm giá:{" "}
                            </div>
                            <div className="col-7">{data.discountPercent}</div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-5 label ">Số lượng còn: </div>
                            <div className="col-7">{data.remaining}</div>
                        </div>

                        <h5 className="card-title">Bộ xử lý</h5>
                        <div className="row mb-2">
                            <div className="col-5 label ">Vi xử lý: </div>
                            <div className="col-7">{data.processor}</div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-5 label ">Số nhân: </div>
                            <div className="col-7">{data.cores}</div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-5 label ">Số luồng: </div>
                            <div className="col-7">{data.threads}</div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-5 label ">
                                Xung nhịp cơ bản:{" "}
                            </div>
                            <div className="col-7">{data.frequency}</div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-5 label ">
                                Xung nhịp turbo:{" "}
                            </div>
                            <div className="col-7">{data.boostFrequency}</div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-5 label ">
                                Dung lượng cache:{" "}
                            </div>
                            <div className="col-7">{data.cacheCapacity}</div>
                        </div>

                        <h5 className="card-title">RAM và bộ nhớ trong</h5>
                        <div className="row mb-2">
                            <div className="col-5 label ">Dung lượng RAM: </div>
                            <div className="col-7">{data.memoryCapacity}</div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-5 label ">Loại RAM: </div>
                            <div className="col-7">{data.memoryType}</div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-5 label ">Bus RAM: </div>
                            <div className="col-7">{data.memoryBus}</div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-5 label ">
                                Dung lượng RAM tối đa:{" "}
                            </div>
                            <div className="col-7">
                                {data.maxMemoryCapacity}
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-5 label ">Bộ nhớ: </div>
                            <div className="col-7">{data.storage}</div>
                        </div>

                        <h5 className="card-title">Màn hình</h5>
                        <div className="row mb-2">
                            <div className="col-5 label ">
                                Kích thước màn hình:{" "}
                            </div>
                            <div className="col-7">{data.displaySize}</div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-5 label ">Độ phân giải: </div>
                            <div className="col-7">{data.resolution}</div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-5 label ">Tần số quét: </div>
                            <div className="col-7">{data.refreshRate}</div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-5 label ">Gang màu: </div>
                            <div className="col-7">{data.colorGamut}</div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-5 label ">
                                Chất liệu tấm nền:{" "}
                            </div>
                            <div className="col-7">{data.panelType}</div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-5 label ">
                                Màn hình cảm ứng:{" "}
                            </div>
                            <div className="col-7">{data.touchScreen}</div>
                        </div>

                        <h5 className="card-title">Đồ hoạ và âm thanh</h5>
                        <div className="row mb-2">
                            <div className="col-5 label ">Card đồ hoạ: </div>
                            <div className="col-7">{data.graphicsCard}</div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-5 label ">
                                Công nghệ âm thanh:{" "}
                            </div>
                            <div className="col-7">{data.soundTechnology}</div>
                        </div>

                        <h5 className="card-title">
                            Kết nối và tính năng mở rộng
                        </h5>
                        <div className="row mb-2">
                            <div className="col-5 label ">
                                Kết nối không dây:{" "}
                            </div>
                            <div className="col-7">
                                {data.wirelessConnectivity}
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-5 label ">Hỗ trợ thẻ nhớ: </div>
                            <div className="col-7">{data.sdCard}</div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-5 label ">Webcam: </div>
                            <div className="col-7">{data.webcam}</div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-5 label ">Quạt tản nhiệt: </div>
                            <div className="col-7">{data.coolingFan}</div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-5 label ">
                                Các tính năng khác:{" "}
                            </div>
                            <div className="col-7">{data.miscFeature}</div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-5 label ">Đèn bàn phím: </div>
                            <div className="col-7">{data.backlitKeyboard}</div>
                        </div>

                        <h5 className="card-title">Kích thước và khối lượng</h5>
                        <div className="row mb-2">
                            <div className="col-5 label ">Kích thước: </div>
                            <div className="col-7">{data.dimensionWeight}</div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-5 label ">Chất liệu: </div>
                            <div className="col-7">{data.material}</div>
                        </div>

                        <h5 className="card-title">Pin và sạc</h5>
                        <div className="row mb-2">
                            <div className="col-5 label ">Dung lượng pin: </div>
                            <div className="col-7">{data.batteryCapacity}</div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-5 label ">Bộ sạc: </div>
                            <div className="col-7">{data.chargerCapacity}</div>
                        </div>

                        <h5 className="card-title">Thông tin khác</h5>
                        <div className="row mb-2">
                            <div className="col-5 label ">Hệ điều hành: </div>
                            <div className="col-7">{data.os}</div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-5 label ">Năm ra mắt: </div>
                            <div className="col-7">{data.launchDate}</div>
                        </div>

                        <h5 className="card-title">Đánh giá và lượt mua</h5>
                        <div className="row mb-2">
                            <div className="col-5 label ">
                                Trung bình đánh giá:{" "}
                            </div>
                            <div className="col-7">{data.averageRating}</div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-5 label ">
                                Số lượt đánh giá:{" "}
                            </div>
                            <div className="col-7">{data.feedbacksCount}</div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-5 label ">
                                Số lượng đã bán:{" "}
                            </div>
                            <div className="col-7">{data.totalSold}</div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </>
    );
}

export default ProductDetailModal;
