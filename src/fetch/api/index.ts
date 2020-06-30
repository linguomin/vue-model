/* This file was auto-generated. Don't modify this manually. */

export namespace API {
  // Spring
  export enum Spring {
    /**
     * 删除数据集不需要调用引擎层接口
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {Model.Spring.DeleteDatasetRequest} request - [body] request (required)
     * @return {Model.Spring.BaseResultOfOptional} Model.Spring.BaseResultOfOptional
     * @summary DELETE /dataset/batch-delete
     */
    batchDeleteUsingDELETE = 'Spring:batchDeleteUsingDELETE',

    /**
     * 数据集名称校验
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {string} datasetName - [query] 数据集名称 
     * @return {Model.Spring.BaseResultOfOptional} Model.Spring.BaseResultOfOptional
     * @summary GET /dataset/check-name
     */
    checkNameUsingGET = 'Spring:checkNameUsingGET',

    /**
     * 图片使用情况
     * 
     * @param {string} accessToken - [header] user's access token 
     * @return {Model.Spring.BaseResultOfDatasetImageUsageResponse} Model.Spring.BaseResultOfDatasetImageUsageResponse
     * @summary GET /dataset/dataset-image-usage
     */
    datasetImageUsageUsingGET = 'Spring:datasetImageUsageUsingGET',

    /**
     * 数据集数量分布
     * 
     * @param {string} accessToken - [header] user's access token 
     * @return {Model.Spring.BaseResultOfDatasetDistributionResponse} Model.Spring.BaseResultOfDatasetDistributionResponse
     * @summary GET /dataset/dataset-num-distribution
     */
    datasetNumDistributionUsingGET = 'Spring:datasetNumDistributionUsingGET',

    /**
     * 获取数据源
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {string} modelSerial - [query] 模型序列号 
     * @param {integer} page - [query] 当前页 
     * @param {integer} size - [query] 分页大小 
     * @return {Model.Spring.BaseResultOfDatasetSourceResponse} Model.Spring.BaseResultOfDatasetSourceResponse
     * @summary GET /dataset/dataset-source
     */
    datasetSourceUsingGET = 'Spring:datasetSourceUsingGET',

    /**
     * 数据集状态分布
     * 
     * @param {string} accessToken - [header] user's access token 
     * @return {Model.Spring.BaseResultOfListOfDatasetStatusDistributionResponse} Model.Spring.BaseResultOfListOfDatasetStatusDistributionResponse
     * @summary GET /dataset/dataset-status-distribution
     */
    datasetStatusDistributionUsingGET = 'Spring:datasetStatusDistributionUsingGET',

    /**
     * 数据集使用情况
     * 
     * @param {string} accessToken - [header] user's access token 
     * @return {Model.Spring.BaseResultOfDatasetUsageResponse} Model.Spring.BaseResultOfDatasetUsageResponse
     * @summary GET /dataset/dataset-usage
     */
    datasetUsageUsingGET = 'Spring:datasetUsageUsingGET',

    /**
     * 查看当前我的数据集状态列表
     * 
     * @param {string} accessToken - [header] user's access token 
     * @return {Model.Spring.BaseResultOfListOfstring} Model.Spring.BaseResultOfListOfstring
     * @summary GET /dataset/dataset-user-status
     */
    showMyDatasetStatusUsingGET = 'Spring:showMyDatasetStatusUsingGET',

    /**
     * 删除数据集不需要调用引擎层接口
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {string} dataset-serial - [path] 数据集编号 
     * @return {Model.Spring.BaseResultOfOptional} Model.Spring.BaseResultOfOptional
     * @summary DELETE /dataset/delete/{dataset-serial}
     */
    deleteUsingDELETE = 'Spring:deleteUsingDELETE',

    /**
     * 获取个人主页用户标注过的数据集数量
     * 
     * @param {string} accessToken - [header] user's access token 
     * @return {Model.Spring.BaseResultOfListOfLabeledDatasetDistributionResponse} Model.Spring.BaseResultOfListOfLabeledDatasetDistributionResponse
     * @summary GET /dataset/labeled/quantity/statistics
     */
    getLabeledDatasetQuantityStatisticsUsingGET = 'Spring:getLabeledDatasetQuantityStatisticsUsingGET',

    /**
     * 查看我的数据集列表，筛选条件为：模型类型、数据状态；检索为：模型或数据集的名称模糊查
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {string} datasetStatus - [query] 数据集状态 
     * @param {string} modelTypeEnum - [query] 关联模型类别 
     * @param {integer} page - [query] 当前页,默认为1 
     * @param {integer} searchType - [query] 0：不介入查询；1：按数据集名称查；2：按模型名称查 
     * @param {string} searchValue - [query] 搜索关键字 
     * @param {integer} size - [query] 分页大小，默认为12 
     * @return {Model.Spring.BaseResultOfDatasetListResponse} Model.Spring.BaseResultOfDatasetListResponse
     * @summary GET /dataset/my/list
     */
    showMyDatasetListUsingGET = 'Spring:showMyDatasetListUsingGET',

    /**
     * 获取个人主页用户拥有数据集数量
     * 
     * @param {string} accessToken - [header] user's access token 
     * @return {Model.Spring.BaseResultOfDatasetDistributionResponse} Model.Spring.BaseResultOfDatasetDistributionResponse
     * @summary GET /dataset/own/quantity/statistics
     */
    getUserOwnQuantityStatisticsUsingGET = 'Spring:getUserOwnQuantityStatisticsUsingGET',

    /**
     * 创建上传任务
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {Model.Spring.UploadParam} param - [body] param (required)
     * @return {Model.Spring.BaseResultOfUploadResponse} Model.Spring.BaseResultOfUploadResponse
     * @summary POST /dataset/precreate
     */
    preCreateUsingPOST = 'Spring:preCreateUsingPOST',

    /**
     * 上传文件
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {file} chunk - [query] 当前分片 
     * @param {integer} chunkIndex - [query] 当前分片索引 
     * @param {string} chunkMD5 - [query] 当前分片的md5 
     * @param {integer} totalChunk - [query] 总分片数 
     * @param {string} uploadId - [query] 上传任务序号,这个值由后端返回 
     * @return {Model.Spring.BaseResultOfUploadResult} Model.Spring.BaseResultOfUploadResult
     * @summary POST /dataset/upload
     */
    uploadDataSetFileUsingPOST = 'Spring:uploadDataSetFileUsingPOST',

    /**
     * 训练模型时，用户需要获取有权限看到的数据集
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {string} modelSerial - [query] 模型序列号 
     * @param {integer} page - [query] 当前页 
     * @param {integer} size - [query] 分页大小 
     * @return {Model.Spring.BaseResultOfUserDatasetResponse} Model.Spring.BaseResultOfUserDatasetResponse
     * @summary GET /dataset/user-dataset
     */
    userDatasetUsingGET = 'Spring:userDatasetUsingGET',

    /**
     * 训练模型时，获取用户上次训练的数据集
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {string} 模型序列号 - [query] 模型序列号 (required)
     * @return {Model.Spring.BaseResultOfUserDataset} Model.Spring.BaseResultOfUserDataset
     * @summary GET /dataset/user-last
     */
    userLastDatasetUsingGET = 'Spring:userLastDatasetUsingGET',

    /**
     * 数据集详情
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {string} dataset-serial - [path] dataset-serial (required)
     * @return {Model.Spring.BaseResultOfDatasetDetailResponse} Model.Spring.BaseResultOfDatasetDetailResponse
     * @summary GET /dataset/{dataset-serial}/detail
     */
    detailUsingGET = 'Spring:detailUsingGET',

    /**
     * 下载数据集
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {string} dataset-serial - [path] 数据集编号 
     * @return {boolean} boolean
     * @summary GET /dataset/{dataset-serial}/download
     */
    downloadUsingGET = 'Spring:downloadUsingGET',

    /**
     * 修改数据集
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {string} dataset-serial - [path] dataset-serial (required)
     * @param {Model.Spring.ModifyDatasetRequest} modifyDatasetRequest - [body] modifyDatasetRequest (required)
     * @return {Model.Spring.BaseResultOfOptional} Model.Spring.BaseResultOfOptional
     * @summary PUT /dataset/{dataset-serial}/modify
     */
    modifyDatasetUsingPUT = 'Spring:modifyDatasetUsingPUT',

    /**
     * 发布数据集
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {string} dataset-serial - [path] dataset-serial (required)
     * @return {Model.Spring.BaseResultOfReleaseResponse} Model.Spring.BaseResultOfReleaseResponse
     * @summary POST /dataset/{dataset-serial}/release
     */
    releaseUsingPOST = 'Spring:releaseUsingPOST',

    /**
     * 修改数据集权限
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {string} dataset-serial - [path] 数据集编号 
     * @param {string} visibility - [query] 数据集权限 
     * @return {Model.Spring.BaseResultOfOptional} Model.Spring.BaseResultOfOptional
     * @summary PUT /dataset/{dataset-serial}/visibility
     */
    visibilityUsingPUT = 'Spring:visibilityUsingPUT',

    /**
     * 创建数据集
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {Model.Spring.CreateDatasetRequest} createDatasetRequest - [body] createDatasetRequest (required)
     * @param {string} model-type - [path] model-type (required)
     * @param {string} uploadId - [query] uploadId 
     * @return {Model.Spring.BaseResultOfOptional} Model.Spring.BaseResultOfOptional
     * @summary POST /dataset/{model-type}/create
     */
    createDatasetUsingPOST = 'Spring:createDatasetUsingPOST',

    /**
     * 人脸数据接入
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {Model.Spring.IncrementDataRequest} incrementDataRequest - [body] incrementDataRequest (required)
     * @return {Model.Spring.BaseResultOfIncrementDataResponse} Model.Spring.BaseResultOfIncrementDataResponse
     * @summary POST /face/increment/data/access
     */
    dataAccessUsingPOST = 'Spring:dataAccessUsingPOST',

    /**
     * 根据图片的fileId获取真实图片数据
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {string} dataId - [path] 图片文件ID 
     * @return {Model.Spring.BaseResultOfOptional} Model.Spring.BaseResultOfOptional
     * @summary GET /image/static/{dataId}
     */
    getImageBinaryUsingGET = 'Spring:getImageBinaryUsingGET',

    /**
     * 开始标注图片
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {string} dataset-serial - [path] 数据集序号 
     * @return {Model.Spring.BaseResultOfLabelingTaskResponse} Model.Spring.BaseResultOfLabelingTaskResponse
     * @summary GET /labeling/dataset/{dataset-serial}
     */
    labelImageUsingGET = 'Spring:labelImageUsingGET',

    /**
     * 保存标注信息和保存半自动标注信息
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {Model.Spring.LabelingDTO} labelingRequest - [body] labelingRequest (required)
     * @return {Model.Spring.BaseResultOfSaveLabelInfoResponse} Model.Spring.BaseResultOfSaveLabelInfoResponse
     * @summary POST /labeling/label-info
     */
    saveLabelInfoUsingPOST = 'Spring:saveLabelInfoUsingPOST',

    /**
     * 获取当前用户标注任务中的标注信息
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {string} dataset-serial - [path] 数据集编号 
     * @param {string} taskTypeEnum - [query] taskTypeEnum 
     * @return {Model.Spring.BaseResultOfLabelInfoResponse} Model.Spring.BaseResultOfLabelInfoResponse
     * @summary GET /labeling/label-info/{dataset-serial}
     */
    getLabelingInfoUsingGET = 'Spring:getLabelingInfoUsingGET',

    /**
     * 结束当前标注任务
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {string} dataset-serial - [path] 数据集编号 
     * @param {string} taskTypeEnum - [query] taskTypeEnum 
     * @return {Model.Spring.BaseResultOfSaveLabelInfoResponse} Model.Spring.BaseResultOfSaveLabelInfoResponse
     * @summary PUT /labeling/label-info/{dataset-serial}
     */
    finishLabelingTaskUsingPUT = 'Spring:finishLabelingTaskUsingPUT',

    /**
     * 获取数据集对应的标签
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {string} dataset-serial - [path] 数据集序号 
     * @return {Model.Spring.BaseResultOfDatasetLabelResponse} Model.Spring.BaseResultOfDatasetLabelResponse
     * @summary GET /labeling/{dataset-serial}/labels
     */
    getLabelsUsingGET = 'Spring:getLabelsUsingGET',

    /**
     * 图片预览
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {string} dataset-serial - [path] 数据集序号 
     * @param {integer} size - [query] 预览图片数 
     * @param {string} status - [query] 图片预览状态 
     * @return {Model.Spring.BaseResultOfImagePreviewResponse} Model.Spring.BaseResultOfImagePreviewResponse
     * @summary GET /labeling/{dataset-serial}/preview
     */
    previewUsingGET = 'Spring:previewUsingGET',

    /**
     * 开始审核半自动标注结果
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {string} dataset-serial - [path] 数据集序号 
     * @return {Model.Spring.BaseResultOfLabelingTaskResponse} Model.Spring.BaseResultOfLabelingTaskResponse
     * @summary GET /labeling/{dataset-serial}/review
     */
    reviewUsingGET = 'Spring:reviewUsingGET',

    /**
     * 每次启动半自动标注，需要判断上一次启动时的数据集状态和这次数据集状态变化了多少
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {string} dataset-serial - [path] 数据集序号 
     * @param {integer} isBrowser - [query] isBrowser (required)
     * @return {Model.Spring.BaseResultOfSemiLabelingResponse} Model.Spring.BaseResultOfSemiLabelingResponse
     * @summary GET /labeling/{dataset-serial}/semi-labeling
     */
    semiLabelingUsingGET = 'Spring:semiLabelingUsingGET',

    /**
     * 创建模型评测任务
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {Model.Spring.CreateModelReviewRequest} createModelReviewRequest - [body] createModelReviewRequest (required)
     * @return {Model.Spring.BaseResultOfOptional} Model.Spring.BaseResultOfOptional
     * @summary POST /model-review/create
     */
    createReviewTaskUsingPOST = 'Spring:createReviewTaskUsingPOST',

    /**
     * 查看模型评测任务信息
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {integer} recordId - [query] 评测记录编号 
     * @return {Model.Spring.BaseResultOf评测信息-RecordDetailResponse} Model.Spring.BaseResultOf评测信息-RecordDetailResponse
     * @summary GET /model-review/detail
     */
    getRecordDetailUsingGET = 'Spring:getRecordDetailUsingGET',

    /**
     * 查看模型评测指标
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {integer} recordId - [query] 评测记录编号 
     * @return {Model.Spring.BaseResultOfModelIndicatorsReponse} Model.Spring.BaseResultOfModelIndicatorsReponse
     * @summary GET /model-review/indicators
     */
    getReviewIndicatorsUsingGET = 'Spring:getReviewIndicatorsUsingGET',

    /**
     * 获取当前模型的不同版本
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {string} modelSerial - [query] 模型序列号 
     * @param {integer} page - [query] 当前页 
     * @param {integer} size - [query] 分页大小 
     * @return {Model.Spring.BaseResultOfModelVersionsResponse} Model.Spring.BaseResultOfModelVersionsResponse
     * @summary GET /model-review/model-version
     */
    modelVersionsUsingGET = 'Spring:modelVersionsUsingGET',

    /**
     * 查看模型评测记录
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {string} modelReviewStatus - [query] 模型评测状态 
     * @param {string} modelReviewType - [query] 关联模型类别 
     * @param {integer} page - [query] 当前页,默认为1 
     * @param {integer} searchType - [query] 0：不介入查询；1：按模型名称查；2：按评测集名称查 
     * @param {string} searchValue - [query] 搜索关键字 
     * @param {integer} size - [query] 分页大小，默认为12 
     * @return {Model.Spring.BaseResultOf模型评测记录列表-ReviewRecordResonse} Model.Spring.BaseResultOf模型评测记录列表-ReviewRecordResonse
     * @summary GET /model-review/records
     */
    getModelReviewRecordUsingGET = 'Spring:getModelReviewRecordUsingGET',

    /**
     * 查看评测集数据分布
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {Model.Spring.ReviewDistributeRequest} reviewDistributeRequest - [body] reviewDistributeRequest (required)
     * @return {Model.Spring.BaseResultOfReviewDistributeResponse} Model.Spring.BaseResultOfReviewDistributeResponse
     * @summary POST /model-review/review-data
     */
    getDatasetReviewDataUsingPOST = 'Spring:getDatasetReviewDataUsingPOST',

    /**
     * 获取用户所有有权限看到的评测集
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {Model.Spring.ReviewUserDatasetRequest} reviewDatasetRequest - [body] reviewDatasetRequest (required)
     * @return {Model.Spring.BaseResultOfReviewDatasetResponse} Model.Spring.BaseResultOfReviewDatasetResponse
     * @summary POST /model-review/user-dataset
     */
    reviewDatasetsUsingPOST = 'Spring:reviewDatasetsUsingPOST',

    /**
     * 创建评测任务的时候需要选择跟某个模型进行关联，因此需要获取到用户有权限看到的模型列表
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {string} model-type - [path] 模型类型,可使用小写 
     * @param {integer} page - [query] 当前页,默认为1 
     * @param {integer} size - [query] 分页大小，默认为10 
     * @return {Model.Spring.BaseResultOfListOfModelVersion} Model.Spring.BaseResultOfListOfModelVersion
     * @summary GET /model-review/{model-type}/user-models
     */
    userModelUsingGET_1 = 'Spring:userModelUsingGET_1',

    /**
     * 删除模型,复用原来php的接口
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {Model.Spring.BatchDeleteModelRequest} modelSerials - [body] 模型序号集合 
     * @return {Model.Spring.BaseResultOfOptional} Model.Spring.BaseResultOfOptional
     * @summary DELETE /model/batch-delete
     */
    batchDeleteModelUsingDELETE = 'Spring:batchDeleteModelUsingDELETE',

    /**
     * 2020/2/6接口评审：暂无引擎层接口，业务层将模型状态置为终止。已终止的模型不能再次训练
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {Model.Spring.BatchStopTrainingRequest} batchStopTrainingRequest - [body] batchStopTrainingRequest (required)
     * @return {Model.Spring.BaseResultOfBatchStopTrainingResponse} Model.Spring.BaseResultOfBatchStopTrainingResponse
     * @summary POST /model/batch-stop
     */
    batchStopTrainingUsingPOST = 'Spring:batchStopTrainingUsingPOST',

    /**
     * 评测结果用原来的接口，等算法层确定
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {string} model-serial - [query] 模型编号 
     * @param {string} version - [query] 模型版本 
     * @return {Model.Spring.BaseResultOfstring} Model.Spring.BaseResultOfstring
     * @summary GET /model/eval-result
     */
    getEvalResultUsingGET = 'Spring:getEvalResultUsingGET',

    /**
     * 管理员获取共享模型列表中的所有群组
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {string} modelType - [query] （可选）模型类型 
     * @param {integer} page - [query] 当前页 
     * @param {integer} size - [query] 分页大小 
     * @return {Model.Spring.BaseResultOfShareGroupListResponse} Model.Spring.BaseResultOfShareGroupListResponse
     * @summary GET /model/list/groups
     */
    groupsUsingGET = 'Spring:groupsUsingGET',

    /**
     * 获取模型对应评测集列表
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {string} modelSerial - [query] 模型编号 
     * @param {string} version - [query] 模型版本 
     * @return {Model.Spring.BaseResultOfModelHistorySetResponse} Model.Spring.BaseResultOfModelHistorySetResponse
     * @summary GET /model/list/model-testSet
     */
    getModelTestSetListUsingGET = 'Spring:getModelTestSetListUsingGET',

    /**
     * 获取模型类别列表
     * 
     * @param {string} accessToken - [header] user's access token 
     * @return {Model.Spring.BaseResultOfListOfstring} Model.Spring.BaseResultOfListOfstring
     * @summary GET /model/list/model-type
     */
    getModelTypeListUsingGET = 'Spring:getModelTypeListUsingGET',

    /**
     * 查看当前我的模型状态列表
     * 
     * @param {string} accessToken - [header] user's access token 
     * @return {Model.Spring.BaseResultOfListOfstring} Model.Spring.BaseResultOfListOfstring
     * @summary GET /model/model-user-status
     */
    showMyDatasetStatusUsingGET_1 = 'Spring:showMyDatasetStatusUsingGET_1',

    /**
     * 我的模型TAB不显示“创建者”查找框、“所属群组”下拉菜单。显示”创建模型“按钮。
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {string} modelName - [query] 可选：查找模型名称 
     * @param {string} modelStatus - [query] 可选：模型状态 
     * @param {string} modelType - [query] 可选：模型类型 
     * @param {integer} page - [query] 当前页 
     * @param {integer} size - [query] 分页大小 
     * @return {Model.Spring.BaseResultOfMyModelListResponse} Model.Spring.BaseResultOfMyModelListResponse
     * @summary GET /model/my/list
     */
    myModelListUsingGET = 'Spring:myModelListUsingGET',

    /**
     * 个人主页获取模型数量统计
     * 
     * @param {string} accessToken - [header] user's access token 
     * @return {Model.Spring.BaseResultOfListOfModelQuantityDistributeResponse} Model.Spring.BaseResultOfListOfModelQuantityDistributeResponse
     * @summary GET /model/own/quantity/statistics
     */
    getUserOwnQuantityStatisticsUsingGET_1 = 'Spring:getUserOwnQuantityStatisticsUsingGET_1',

    /**
     * TODO: 发布模型，需要调用viper的接口
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {Model.Spring.PublishModelRequest} publishModelRequest - [body] publishModelRequest (required)
     * @return {Model.Spring.BaseResultOfOptional} Model.Spring.BaseResultOfOptional
     * @summary POST /model/publish
     */
    publishUsingPOST = 'Spring:publishUsingPOST',

    /**
     * 首页获取模型数量分布
     * 
     * @param {string} accessToken - [header] user's access token 
     * @return {Model.Spring.BaseResultOfListOfModelQuantityDistributeResponse} Model.Spring.BaseResultOfListOfModelQuantityDistributeResponse
     * @summary GET /model/quantity/distribute
     */
    getModelQuantityDistributeUsingGET = 'Spring:getModelQuantityDistributeUsingGET',

    /**
     * 共享模型列表
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {string} groupSerial - [query] 所属群组,在系统管理员的视图里，才有所属群组的下拉框 
     * @param {string} modelType - [query] （可选）模型类型，和搜索类型是且的关系 
     * @param {integer} page - [query] 当前页 
     * @param {integer} searchType - [query] 搜索类型：1、模型名称；2、创建者 
     * @param {string} searchValue - [query] 搜索关键字 
     * @param {integer} size - [query] 分页大小 
     * @return {Model.Spring.BaseResultOfShareModelListResponse} Model.Spring.BaseResultOfShareModelListResponse
     * @summary GET /model/share/list
     */
    shareModelListUsingGET = 'Spring:shareModelListUsingGET',

    /**
     * 首页获取模型状态分布
     * 
     * @param {string} accessToken - [header] user's access token 
     * @return {Model.Spring.BaseResultOfListOfModelStatusDistributeResponse} Model.Spring.BaseResultOfListOfModelStatusDistributeResponse
     * @summary GET /model/status/distribute
     */
    getModelStatusDistributeUsingGET = 'Spring:getModelStatusDistributeUsingGET',

    /**
     * 首页获取模型训练指标Top5
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {integer} index_type - [query] 指标类型 
     * @param {integer} model_type - [query] 模型类型 
     * @return {Model.Spring.BaseResultOfListOfModelIndexItem} Model.Spring.BaseResultOfListOfModelIndexItem
     * @summary GET /model/status/index
     */
    getModelTrainingIndexUsingGET = 'Spring:getModelTrainingIndexUsingGET',

    /**
     * 获取训练最快模型Top5统计
     * 
     * @param {string} accessToken - [header] user's access token 
     * @return {Model.Spring.BaseResultOfListOfModelTrainingElapsedResponse} Model.Spring.BaseResultOfListOfModelTrainingElapsedResponse
     * @summary GET /model/training/statistics
     */
    getModelTrainingElapsedStatisticsUsingGET = 'Spring:getModelTrainingElapsedStatisticsUsingGET',

    /**
     * 模型详情
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {string} model-serial - [path] 模型序号 
     * @param {string} version - [query] 模型版本 
     * @return {Model.Spring.BaseResultOfModelDetailResponse} Model.Spring.BaseResultOfModelDetailResponse
     * @summary GET /model/{model-serial}/detail
     */
    modelDetailUsingGET = 'Spring:modelDetailUsingGET',

    /**
     * 模型对应训练集和评测集标签使用情况
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {string} model-serial - [path] 模型类型,可使用小写 
     * @param {string} version - [path] version (required)
     * @return {Model.Spring.BaseResultOfLabelUsageResponse} Model.Spring.BaseResultOfLabelUsageResponse
     * @summary GET /model/{model-serial}/label-usage/{version}
     */
    labelUsageUsingGET = 'Spring:labelUsageUsingGET',

    /**
     * 评测页面：获取模型关联的数据集
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {string} model-serial - [path] 模型序号 
     * @return {Model.Spring.BaseResultOfobject} Model.Spring.BaseResultOfobject
     * @summary GET /model/{model-serial}/ref-dataset
     */
    getRefDatasetUsingGET = 'Spring:getRefDatasetUsingGET',

    /**
     * 发布训练完成的模型到Viper算法仓
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {string} model-serial - [path] 模型序号 
     * @param {string} version - [query] 模型版本 
     * @return {Model.Spring.BaseResultOfOptional} Model.Spring.BaseResultOfOptional
     * @summary GET /model/{model-serial}/release
     */
    toReleaseUsingGET = 'Spring:toReleaseUsingGET',

    /**
     * 训练模型，单次训练最多勾选10个训练集，最多迭代20个版本；训练完成之后需要轮询引擎层接口修改模型状态;对于同一个模型来说 一个数据集不能同时属于训练集和评测集
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {string} model-serial - [path] 模型序号 
     * @param {Model.Spring.TrainingModelRequest} trainingModelRequest - [body] trainingModelRequest (required)
     * @return {Model.Spring.BaseResultOfOptional} Model.Spring.BaseResultOfOptional
     * @summary POST /model/{model-serial}/training
     */
    startTrainingUsingPOST = 'Spring:startTrainingUsingPOST',

    /**
     * 获取对应模型的所有版本
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {string} filterVersion - [query] filterVersion (required)
     * @param {boolean} ignoreCurrentUser - [query] ignoreCurrentUser (required)
     * @param {string} model-serial - [path] 模型序号 
     * @return {Model.Spring.BaseResultOfVersionsListResponse} Model.Spring.BaseResultOfVersionsListResponse
     * @summary GET /model/{model-serial}/versions
     */
    versionsModelListUsingGET = 'Spring:versionsModelListUsingGET',

    /**
     * 修改模型权限
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {string} model-serial - [path] 模型序号 
     * @param {Model.Spring.ModifyVisibilityRequest} visibilityRequest - [body] visibilityRequest (required)
     * @return {Model.Spring.BaseResultOfOptional} Model.Spring.BaseResultOfOptional
     * @summary PUT /model/{model-serial}/visibility
     */
    visibilityUsingPUT_1 = 'Spring:visibilityUsingPUT_1',

    /**
     * 下载模型,复用php的接口
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {string} model-serial - [path] 模型序号 
     * @param {string} model-version - [path] 模型版本 
     * @return {Model.Spring.BaseResultOfOptional} Model.Spring.BaseResultOfOptional
     * @summary GET /model/{model-serial}/{model-version}/download
     */
    downloadUsingGET_1 = 'Spring:downloadUsingGET_1',

    /**
     * 获取指定某个模型指定版本的评测结果数据
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {string} model-serial - [path] 模型序号 (required)
     * @param {string} model-version - [path] 模型版本 (required)
     * @return {Model.Spring.BaseResultOfstring} Model.Spring.BaseResultOfstring
     * @summary GET /model/{model-serial}/{model-version}/evaluate
     */
    getEvaluateResultUsingGET = 'Spring:getEvaluateResultUsingGET',

    /**
     * 2020/2/6接口评审：不需要调用引擎层接口；模型名称是全局唯一的
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {Model.Spring.CreateModelRequest} createModelRequest - [body] createModelRequest (required)
     * @param {string} model-type - [path] 模型类型,可使用小写 
     * @return {Model.Spring.BaseResultOfOptional} Model.Spring.BaseResultOfOptional
     * @summary POST /model/{model-type}/create
     */
    createModelUsingPOST = 'Spring:createModelUsingPOST',

    /**
     * 评测结果用原来的接口，等算法层确定
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {Model.Spring.EvaluationRequest} evaluationRequest - [body] evaluationRequest (required)
     * @param {string} model-type - [path] 模型类型,可使用小写 
     * @return {Model.Spring.BaseResultOfobject} Model.Spring.BaseResultOfobject
     * @summary POST /model/{model-type}/evaluation
     */
    evaluationUsingPOST = 'Spring:evaluationUsingPOST',

    /**
     * 修改模型详情接口
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {string} model-type - [path] 模型类型,可使用小写 
     * @param {Model.Spring.ModifyModelRequest} modifyModelRequest - [body] modifyModelRequest (required)
     * @return {Model.Spring.BaseResultOfOptional} Model.Spring.BaseResultOfOptional
     * @summary PUT /model/{model-type}/modify
     */
    modifyModelDetailUsingPUT = 'Spring:modifyModelDetailUsingPUT',

    /**
     * 创建数据集的时候需要选择跟某个模型进行关联，因此需要获取到用户有权限看到的模型列表
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {string} model-type - [path] 模型类型,可使用小写 
     * @param {integer} page - [query] 当前页,默认为1 
     * @param {integer} size - [query] 分页大小，默认为10 
     * @return {Model.Spring.BaseResultOfUserModelsResponse} Model.Spring.BaseResultOfUserModelsResponse
     * @summary GET /model/{model-type}/user-models
     */
    userModelUsingGET = 'Spring:userModelUsingGET',

    /**
     * 获取工作流模板
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {string} model-type - [path] 模型类型 
     * @return {Model.Spring.BaseResultOfWorkflowResponse} Model.Spring.BaseResultOfWorkflowResponse
     * @summary GET /model/{model-type}/workflow
     */
    getWorkflowUsingGET = 'Spring:getWorkflowUsingGET',

    /**
     * 节点模板删除
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {array} nodeIdList - [body] nodeIdList (required)
     * @return {Model.Spring.BaseResultOfOptional} Model.Spring.BaseResultOfOptional
     * @summary DELETE /nodes/delete
     */
    deleteNodesUsingDELETE = 'Spring:deleteNodesUsingDELETE',

    /**
     * 节点模板导出
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {integer} node-id - [path] node-id (required)
     * @return {Model.Spring.BaseResultOfOptional} Model.Spring.BaseResultOfOptional
     * @summary GET /nodes/export/{node-id}
     */
    exportNodesUsingGET = 'Spring:exportNodesUsingGET',

    /**
     * 节点模板导入
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {file} file - [formData] file 
     * @return {Model.Spring.BaseResultOfOptional} Model.Spring.BaseResultOfOptional
     * @summary POST /nodes/import
     */
    importNodesInfoUsingPOST = 'Spring:importNodesInfoUsingPOST',

    /**
     * 节点模板详情
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {integer} node_id - [path] node_id (required)
     * @return {Model.Spring.BaseResultOfJSONObject} Model.Spring.BaseResultOfJSONObject
     * @summary GET /nodes/info/{node_id}
     */
    getNodesInfoUsingGET = 'Spring:getNodesInfoUsingGET',

    /**
     * 节点模板列表
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {integer} page - [query] 当前页码，取值范围>0。默认1 超出范围取默认。 
     * @param {string} pattern - [query] 筛选条件：模糊匹配 
     * @param {integer} size - [query] 页大小，取值>=10 且<=1000。默认10 超出范围取最大或最小值。 
     * @return {Model.Spring.BaseResultOfPageResponseOfNodesDTO} Model.Spring.BaseResultOfPageResponseOfNodesDTO
     * @summary GET /nodes/list
     */
    getNodesListUsingGET = 'Spring:getNodesListUsingGET',

    /**
     * userLogout
     * 
     * @param {string} accessToken - [header] accessToken (required)
     * @return {Model.Spring.BaseResult} Model.Spring.BaseResult
     * @summary POST /oauth/logout
     */
    userLogoutUsingPOST = 'Spring:userLogoutUsingPOST',

    /**
     * getUserAccessToken
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {Model.Spring.LoginInfoParam} loginInfoParam - [body] loginInfoParam (required)
     * @return {Model.Spring.BaseResultOfAuthUserInfo} Model.Spring.BaseResultOfAuthUserInfo
     * @summary POST /oauth/token
     */
    getUserAccessTokenUsingPOST = 'Spring:getUserAccessTokenUsingPOST',

    /**
     * 获取验证码图片
     * 
     * @param {string} accessToken - [header] user's access token 
     * @return {Model.Spring.BaseResultOfVerifyCodeDataResponse} Model.Spring.BaseResultOfVerifyCodeDataResponse
     * @summary GET /oauth/verifycode
     */
    getVCodeUsingGET = 'Spring:getVCodeUsingGET',

    /**
     * 获取群组列表
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {integer} page - [query] 当前页,默认为1 
     * @param {string} searchWord - [query] 检索关键字，默认为空 
     * @param {integer} size - [query] 记录数,默认=12 
     * @param {string} type - [query] 群组类型.1-用户群组，2-标注员群组 
     * @return {Model.Spring.BaseResultOfPageResponseOfGroupResponse} Model.Spring.BaseResultOfPageResponseOfGroupResponse
     * @summary GET /uums/groups
     */
    listGroupUsingGET = 'Spring:listGroupUsingGET',

    /**
     * 创建群组
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {Model.Spring.GroupInfoParam} groupInfoParam - [body] groupInfoParam (required)
     * @return {Model.Spring.BaseResultOfOptional} Model.Spring.BaseResultOfOptional
     * @summary POST /uums/groups
     */
    createGroupUsingPOST = 'Spring:createGroupUsingPOST',

    /**
     * 获取瀑布流时传入page和size
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {string} groupTypeEnum - [query] 群组类型，1-普通用户群组，2-标注员群组 
     * @param {integer} page - [query] 当获取瀑布流时传入 
     * @param {integer} size - [query] 当获取瀑布流时传入 
     * @return {Model.Spring.BaseResultOfGroupListForChoiceResponse} Model.Spring.BaseResultOfGroupListForChoiceResponse
     * @summary GET /uums/groups/forchoice
     */
    groupforchoiceUsingGET = 'Spring:groupforchoiceUsingGET',

    /**
     * 编辑群组
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {string} group-serial - [path] 群组序列号 
     * @param {Model.Spring.GroupInfoParam} groupInfoParam - [body] groupInfoParam (required)
     * @return {Model.Spring.BaseResultOfOptional} Model.Spring.BaseResultOfOptional
     * @summary PUT /uums/groups/{group-serial}
     */
    editGroupUsingPUT = 'Spring:editGroupUsingPUT',

    /**
     * 删除群组
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {string} group-serial - [path] 删除群组序列号 
     * @return {Model.Spring.BaseResultOfOptional} Model.Spring.BaseResultOfOptional
     * @summary DELETE /uums/groups/{group-serial}
     */
    deleteGroupUsingDELETE = 'Spring:deleteGroupUsingDELETE',

    /**
     * listRoles
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {integer} page - [query] 页码，默认1 
     * @param {string} roleName - [query] 角色名称 
     * @param {integer} size - [query] 记录数,默认=12 
     * @return {Model.Spring.BaseResultOfPageResponseOfRoleResponse} Model.Spring.BaseResultOfPageResponseOfRoleResponse
     * @summary GET /uums/roles
     */
    listRolesUsingGET = 'Spring:listRolesUsingGET',

    /**
     * listUsers
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {string} groupSerial - [query] 群组序列号 
     * @param {string} groupType - [query] 群组类型 
     * @param {string} keywords - [query] 搜索关键字[用户名] 
     * @param {integer} page - [query] 页码，默认=1 
     * @param {integer} size - [query] 每页数量，默认=12 
     * @return {Model.Spring.BaseResultOfPageResponseOfUserResponse} Model.Spring.BaseResultOfPageResponseOfUserResponse
     * @summary GET /uums/users
     */
    listUsersUsingGET = 'Spring:listUsersUsingGET',

    /**
     * createUser
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {Model.Spring.UserInfoParam} userInfoParam - [body] userInfoParam (required)
     * @return {Model.Spring.BaseResultOfOptional} Model.Spring.BaseResultOfOptional
     * @summary POST /uums/users
     */
    createUserUsingPOST = 'Spring:createUserUsingPOST',

    /**
     * getUserInfoByUsername
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {integer} id - [path] id (required)
     * @return {Model.Spring.BaseResultOfUserResponse} Model.Spring.BaseResultOfUserResponse
     * @summary GET /uums/users/{id}
     */
    getUserInfoByUsernameUsingGET = 'Spring:getUserInfoByUsernameUsingGET',

    /**
     * updateUser
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {Model.Spring.编辑用户信息} editUserRequest - [body] editUserRequest (required)
     * @param {integer} id - [path] id (required)
     * @return {Model.Spring.BaseResultOfOptional} Model.Spring.BaseResultOfOptional
     * @summary PUT /uums/users/{id}
     */
    updateUserUsingPUT = 'Spring:updateUserUsingPUT',

    /**
     * deleteUser
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {integer} id - [path] id (required)
     * @return {Model.Spring.BaseResultOfOptional} Model.Spring.BaseResultOfOptional
     * @summary DELETE /uums/users/{id}
     */
    deleteUserUsingDELETE = 'Spring:deleteUserUsingDELETE',

    /**
     * changeUserState
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {integer} id - [path] id (required)
     * @param {integer} state - [query] 用户状态，1-启用，2-禁用 
     * @return {Model.Spring.BaseResultOfOptional} Model.Spring.BaseResultOfOptional
     * @summary PUT /uums/users/{id}/changestate
     */
    changeUserStateUsingPUT = 'Spring:changeUserStateUsingPUT',

    /**
     * changeUserPassword
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {Model.Spring.ChangeUserPasswordRequest} changeUserPasswordRequest - [body] changeUserPasswordRequest (required)
     * @param {integer} id - [path] id (required)
     * @return {Model.Spring.BaseResultOfOptional} Model.Spring.BaseResultOfOptional
     * @summary PUT /uums/users/{id}/modifypwd
     */
    changeUserPasswordUsingPUT = 'Spring:changeUserPasswordUsingPUT',

    /**
     * 重置密码
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {integer} id - [path] id (required)
     * @param {Model.Spring.ResetUserPasswordRequest} resetUserPasswordRequest - [body] resetUserPasswordRequest (required)
     * @return {Model.Spring.BaseResultOfOptional} Model.Spring.BaseResultOfOptional
     * @summary PUT /uums/users/{id}/reset
     */
    resetUserPasswordUsingPUT = 'Spring:resetUserPasswordUsingPUT',

    /**
     * 工作流模板删除
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {array} workflowIdList - [body] workflowIdList (required)
     * @return {Model.Spring.BaseResultOfOptional} Model.Spring.BaseResultOfOptional
     * @summary DELETE /workflows/delete
     */
    deleteWorkFlowsUsingDELETE = 'Spring:deleteWorkFlowsUsingDELETE',

    /**
     * 工作流模板导出
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {integer} workflow-id - [path] workflow-id (required)
     * @return {Model.Spring.BaseResultOfOptional} Model.Spring.BaseResultOfOptional
     * @summary GET /workflows/export/{workflow-id}
     */
    exportWorkFlowsUsingGET = 'Spring:exportWorkFlowsUsingGET',

    /**
     * 工作流模板导入
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {integer} algorithmType - [query] 算法类型 
     * @param {string} memo - [query] 描述、摘要 
     * @param {string} title - [query] 标题 
     * @param {file} workflowTemplate - [formData] 工作流模板 
     * @return {Model.Spring.BaseResultOfOptional} Model.Spring.BaseResultOfOptional
     * @summary POST /workflows/import
     */
    importWorkFlowsUsingPOST = 'Spring:importWorkFlowsUsingPOST',

    /**
     * 工作流模板详情
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {integer} workflow-id - [path] workflow-id (required)
     * @return {Model.Spring.BaseResultOfJSONObject} Model.Spring.BaseResultOfJSONObject
     * @summary GET /workflows/info/{workflow-id}
     */
    getWorkFlowsInfoUsingGET = 'Spring:getWorkFlowsInfoUsingGET',

    /**
     * 工作流模板列表
     * 
     * @param {string} accessToken - [header] user's access token 
     * @param {integer} page - [query] 当前页码，取值范围>0。默认1 超出范围取默认。 
     * @param {string} pattern - [query] 筛选条件：模糊匹配 
     * @param {integer} size - [query] 页大小，取值>=10 且<=1000。默认10 超出范围取最大或最小值。 
     * @return {Model.Spring.BaseResultOfPageResponseOfWorkFlowsDTO} Model.Spring.BaseResultOfPageResponseOfWorkFlowsDTO
     * @summary GET /workflows/list
     */
    getWorkFlowsUsingGET = 'Spring:getWorkFlowsUsingGET',

    /**
     * 工作流模板列表（下拉框）
     * 
     * @param {string} accessToken - [header] user's access token 
     * @return {Model.Spring.BaseResultOfJSONArray} Model.Spring.BaseResultOfJSONArray
     * @summary GET /workflows/listforselect
     */
    getWorkFlowslistforselectUsingGET = 'Spring:getWorkFlowslistforselectUsingGET',
  }
}
