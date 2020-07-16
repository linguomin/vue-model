declare namespace Model.Spring {
    /**
     * AuthUserInfo
     */
    export interface AuthUserInfo {
        /**
         * 用户票据
         */
        accessToken?: string;
        /**
         * 票据有效期
         */
        expires?: number; // int64
        /**
         * Sense Spring版本flag
         */
        flag?: string;
        /**
         * 用户所属群组ID
         */
        groupId?: number; // int64
        /**
         * 用户所属名称
         */
        groupName?: string;
        /**
         * 用户所属序列号
         */
        groupSerial?: string;
        /**
         * 用户头像URL
         */
        imageUrl?: string;
        /**
         * 用户权限code列表
         */
        permissionCodes?: string[];
        /**
         * 用户权限id列表
         */
        permissionIds?: number /* int64 */ [];
        /**
         * 用户名称
         */
        realname?: string;
        /**
         * 用户角色
         */
        role?: UUMSRole[];
        /**
         * 角色ids
         */
        roleIds?: number /* int64 */ [];
        /**
         * 用户ID
         */
        userId?: number; // int64
        /**
         * username
         */
        username?: string;
    }
    /**
     * BaseResult
     */
    export interface BaseResult {
        /**
         * 业务数据
         */
        data?: {
        };
        /**
         * 异常码
         */
        errorCode?: string;
        /**
         * 返回消息
         */
        errorMsg?: string;
        success?: boolean;
    }
    /**
     * BaseResultOfAuthUserInfo
     */
    export interface BaseResultOfAuthUserInfo {
        /**
         * 业务数据
         */
        data?: AuthUserInfo;
        /**
         * 异常码
         */
        errorCode?: string;
        /**
         * 返回消息
         */
        errorMsg?: string;
        success?: boolean;
    }
    /**
     * BaseResultOfBatchStopTrainingResponse
     */
    export interface BaseResultOfBatchStopTrainingResponse {
        /**
         * 业务数据
         */
        data?: BatchStopTrainingResponse;
        /**
         * 异常码
         */
        errorCode?: string;
        /**
         * 返回消息
         */
        errorMsg?: string;
        success?: boolean;
    }
    /**
     * BaseResultOfDatasetDetailResponse
     */
    export interface BaseResultOfDatasetDetailResponse {
        /**
         * 业务数据
         */
        data?: DatasetDetailResponse;
        /**
         * 异常码
         */
        errorCode?: string;
        /**
         * 返回消息
         */
        errorMsg?: string;
        success?: boolean;
    }
    /**
     * BaseResultOfDatasetDistributionResponse
     */
    export interface BaseResultOfDatasetDistributionResponse {
        /**
         * 业务数据
         */
        data?: DatasetDistributionResponse;
        /**
         * 异常码
         */
        errorCode?: string;
        /**
         * 返回消息
         */
        errorMsg?: string;
        success?: boolean;
    }
    /**
     * BaseResultOfDatasetImageUsageResponse
     */
    export interface BaseResultOfDatasetImageUsageResponse {
        /**
         * 业务数据
         */
        data?: DatasetImageUsageResponse;
        /**
         * 异常码
         */
        errorCode?: string;
        /**
         * 返回消息
         */
        errorMsg?: string;
        success?: boolean;
    }
    /**
     * BaseResultOfDatasetLabelResponse
     */
    export interface BaseResultOfDatasetLabelResponse {
        /**
         * 业务数据
         */
        data?: DatasetLabelResponse;
        /**
         * 异常码
         */
        errorCode?: string;
        /**
         * 返回消息
         */
        errorMsg?: string;
        success?: boolean;
    }
    /**
     * BaseResultOfDatasetListResponse
     */
    export interface BaseResultOfDatasetListResponse {
        /**
         * 业务数据
         */
        data?: DatasetListResponse;
        /**
         * 异常码
         */
        errorCode?: string;
        /**
         * 返回消息
         */
        errorMsg?: string;
        success?: boolean;
    }
    /**
     * BaseResultOfDatasetSourceResponse
     */
    export interface BaseResultOfDatasetSourceResponse {
        /**
         * 业务数据
         */
        data?: DatasetSourceResponse;
        /**
         * 异常码
         */
        errorCode?: string;
        /**
         * 返回消息
         */
        errorMsg?: string;
        success?: boolean;
    }
    /**
     * BaseResultOfDatasetUsageResponse
     */
    export interface BaseResultOfDatasetUsageResponse {
        /**
         * 业务数据
         */
        data?: DatasetUsageResponse;
        /**
         * 异常码
         */
        errorCode?: string;
        /**
         * 返回消息
         */
        errorMsg?: string;
        success?: boolean;
    }
    /**
     * BaseResultOfGroupListForChoiceResponse
     */
    export interface BaseResultOfGroupListForChoiceResponse {
        /**
         * 业务数据
         */
        data?: GroupListForChoiceResponse;
        /**
         * 异常码
         */
        errorCode?: string;
        /**
         * 返回消息
         */
        errorMsg?: string;
        success?: boolean;
    }
    /**
     * BaseResultOfImagePreviewResponse
     */
    export interface BaseResultOfImagePreviewResponse {
        /**
         * 业务数据
         */
        data?: ImagePreviewResponse;
        /**
         * 异常码
         */
        errorCode?: string;
        /**
         * 返回消息
         */
        errorMsg?: string;
        success?: boolean;
    }
    /**
     * BaseResultOfIncrementDataResponse
     */
    export interface BaseResultOfIncrementDataResponse {
        /**
         * 业务数据
         */
        data?: IncrementDataResponse;
        /**
         * 异常码
         */
        errorCode?: string;
        /**
         * 返回消息
         */
        errorMsg?: string;
        success?: boolean;
    }
    /**
     * BaseResultOfJSONArray
     */
    export interface BaseResultOfJSONArray {
        /**
         * 业务数据
         */
        data?: {
        }[];
        /**
         * 异常码
         */
        errorCode?: string;
        /**
         * 返回消息
         */
        errorMsg?: string;
        success?: boolean;
    }
    /**
     * BaseResultOfJSONObject
     */
    export interface BaseResultOfJSONObject {
        /**
         * 业务数据
         */
        data?: {
            [name: string]: {
            };
        };
        /**
         * 异常码
         */
        errorCode?: string;
        /**
         * 返回消息
         */
        errorMsg?: string;
        success?: boolean;
    }
    /**
     * BaseResultOfLabelInfoResponse
     */
    export interface BaseResultOfLabelInfoResponse {
        /**
         * 业务数据
         */
        data?: LabelInfoResponse;
        /**
         * 异常码
         */
        errorCode?: string;
        /**
         * 返回消息
         */
        errorMsg?: string;
        success?: boolean;
    }
    /**
     * BaseResultOfLabelUsageResponse
     */
    export interface BaseResultOfLabelUsageResponse {
        /**
         * 业务数据
         */
        data?: LabelUsageResponse;
        /**
         * 异常码
         */
        errorCode?: string;
        /**
         * 返回消息
         */
        errorMsg?: string;
        success?: boolean;
    }
    /**
     * BaseResultOfLabelingTaskResponse
     */
    export interface BaseResultOfLabelingTaskResponse {
        /**
         * 业务数据
         */
        data?: LabelingTaskResponse;
        /**
         * 异常码
         */
        errorCode?: string;
        /**
         * 返回消息
         */
        errorMsg?: string;
        success?: boolean;
    }
    /**
     * BaseResultOfListOfDatasetStatusDistributionResponse
     */
    export interface BaseResultOfListOfDatasetStatusDistributionResponse {
        /**
         * 业务数据
         */
        data?: DatasetStatusDistributionResponse[];
        /**
         * 异常码
         */
        errorCode?: string;
        /**
         * 返回消息
         */
        errorMsg?: string;
        success?: boolean;
    }
    /**
     * BaseResultOfListOfLabeledDatasetDistributionResponse
     */
    export interface BaseResultOfListOfLabeledDatasetDistributionResponse {
        /**
         * 业务数据
         */
        data?: LabeledDatasetDistributionResponse[];
        /**
         * 异常码
         */
        errorCode?: string;
        /**
         * 返回消息
         */
        errorMsg?: string;
        success?: boolean;
    }
    /**
     * BaseResultOfListOfModelIndexItem
     */
    export interface BaseResultOfListOfModelIndexItem {
        /**
         * 业务数据
         */
        data?: ModelIndexItem[];
        /**
         * 异常码
         */
        errorCode?: string;
        /**
         * 返回消息
         */
        errorMsg?: string;
        success?: boolean;
    }
    /**
     * BaseResultOfListOfModelQuantityDistributeResponse
     */
    export interface BaseResultOfListOfModelQuantityDistributeResponse {
        /**
         * 业务数据
         */
        data?: ModelQuantityDistributeResponse[];
        /**
         * 异常码
         */
        errorCode?: string;
        /**
         * 返回消息
         */
        errorMsg?: string;
        success?: boolean;
    }
    /**
     * BaseResultOfListOfModelStatusDistributeResponse
     */
    export interface BaseResultOfListOfModelStatusDistributeResponse {
        /**
         * 业务数据
         */
        data?: ModelStatusDistributeResponse[];
        /**
         * 异常码
         */
        errorCode?: string;
        /**
         * 返回消息
         */
        errorMsg?: string;
        success?: boolean;
    }
    /**
     * BaseResultOfListOfModelTrainingElapsedResponse
     */
    export interface BaseResultOfListOfModelTrainingElapsedResponse {
        /**
         * 业务数据
         */
        data?: ModelTrainingElapsedResponse[];
        /**
         * 异常码
         */
        errorCode?: string;
        /**
         * 返回消息
         */
        errorMsg?: string;
        success?: boolean;
    }
    /**
     * BaseResultOfListOfModelVersion
     */
    export interface BaseResultOfListOfModelVersion {
        /**
         * 业务数据
         */
        data?: ModelVersion[];
        /**
         * 异常码
         */
        errorCode?: string;
        /**
         * 返回消息
         */
        errorMsg?: string;
        success?: boolean;
    }
    /**
     * BaseResultOfListOfstring
     */
    export interface BaseResultOfListOfstring {
        /**
         * 业务数据
         */
        data?: ("ALL" | "OBJECT_DETECTION" | "IMAGE_CLASSIFICATION" | "FACE_RECOGNITION" | "CHARACTER_DETECTION" | "CHARACTER_RECOGNITION")[];
        /**
         * 异常码
         */
        errorCode?: string;
        /**
         * 返回消息
         */
        errorMsg?: string;
        success?: boolean;
    }
    /**
     * BaseResultOfModelDetailResponse
     */
    export interface BaseResultOfModelDetailResponse {
        /**
         * 业务数据
         */
        data?: ModelDetailResponse;
        /**
         * 异常码
         */
        errorCode?: string;
        /**
         * 返回消息
         */
        errorMsg?: string;
        success?: boolean;
    }
    /**
     * BaseResultOfModelHistorySetResponse
     */
    export interface BaseResultOfModelHistorySetResponse {
        /**
         * 业务数据
         */
        data?: ModelHistorySetResponse;
        /**
         * 异常码
         */
        errorCode?: string;
        /**
         * 返回消息
         */
        errorMsg?: string;
        success?: boolean;
    }
    /**
     * BaseResultOfModelIndicatorsReponse
     */
    export interface BaseResultOfModelIndicatorsReponse {
        /**
         * 业务数据
         */
        data?: ModelIndicatorsReponse;
        /**
         * 异常码
         */
        errorCode?: string;
        /**
         * 返回消息
         */
        errorMsg?: string;
        success?: boolean;
    }
    /**
     * BaseResultOfModelVersionsResponse
     */
    export interface BaseResultOfModelVersionsResponse {
        /**
         * 业务数据
         */
        data?: ModelVersionsResponse;
        /**
         * 异常码
         */
        errorCode?: string;
        /**
         * 返回消息
         */
        errorMsg?: string;
        success?: boolean;
    }
    /**
     * BaseResultOfMyModelListResponse
     */
    export interface BaseResultOfMyModelListResponse {
        /**
         * 业务数据
         */
        data?: MyModelListResponse;
        /**
         * 异常码
         */
        errorCode?: string;
        /**
         * 返回消息
         */
        errorMsg?: string;
        success?: boolean;
    }
    /**
     * BaseResultOfOptional
     */
    export interface BaseResultOfOptional {
        /**
         * 业务数据
         */
        data?: WildcardType;
        /**
         * 异常码
         */
        errorCode?: string;
        /**
         * 返回消息
         */
        errorMsg?: string;
        success?: boolean;
    }
    /**
     * BaseResultOfPageResponseOfGroupResponse
     */
    export interface BaseResultOfPageResponseOfGroupResponse {
        /**
         * 业务数据
         */
        data?: PageResponseOfGroupResponse;
        /**
         * 异常码
         */
        errorCode?: string;
        /**
         * 返回消息
         */
        errorMsg?: string;
        success?: boolean;
    }
    /**
     * BaseResultOfPageResponseOfNodesDTO
     */
    export interface BaseResultOfPageResponseOfNodesDTO {
        /**
         * 业务数据
         */
        data?: PageResponseOfNodesDTO;
        /**
         * 异常码
         */
        errorCode?: string;
        /**
         * 返回消息
         */
        errorMsg?: string;
        success?: boolean;
    }
    /**
     * BaseResultOfPageResponseOfRoleResponse
     */
    export interface BaseResultOfPageResponseOfRoleResponse {
        /**
         * 业务数据
         */
        data?: PageResponseOfRoleResponse;
        /**
         * 异常码
         */
        errorCode?: string;
        /**
         * 返回消息
         */
        errorMsg?: string;
        success?: boolean;
    }
    /**
     * BaseResultOfPageResponseOfUserResponse
     */
    export interface BaseResultOfPageResponseOfUserResponse {
        /**
         * 业务数据
         */
        data?: PageResponseOfUserResponse;
        /**
         * 异常码
         */
        errorCode?: string;
        /**
         * 返回消息
         */
        errorMsg?: string;
        success?: boolean;
    }
    /**
     * BaseResultOfPageResponseOfWorkFlowsDTO
     */
    export interface BaseResultOfPageResponseOfWorkFlowsDTO {
        /**
         * 业务数据
         */
        data?: PageResponseOfWorkFlowsDTO;
        /**
         * 异常码
         */
        errorCode?: string;
        /**
         * 返回消息
         */
        errorMsg?: string;
        success?: boolean;
    }
    /**
     * BaseResultOfReleaseResponse
     */
    export interface BaseResultOfReleaseResponse {
        /**
         * 业务数据
         */
        data?: ReleaseResponse;
        /**
         * 异常码
         */
        errorCode?: string;
        /**
         * 返回消息
         */
        errorMsg?: string;
        success?: boolean;
    }
    /**
     * BaseResultOfReviewDatasetResponse
     */
    export interface BaseResultOfReviewDatasetResponse {
        /**
         * 业务数据
         */
        data?: ReviewDatasetResponse;
        /**
         * 异常码
         */
        errorCode?: string;
        /**
         * 返回消息
         */
        errorMsg?: string;
        success?: boolean;
    }
    /**
     * BaseResultOfReviewDistributeResponse
     */
    export interface BaseResultOfReviewDistributeResponse {
        /**
         * 业务数据
         */
        data?: ReviewDistributeResponse;
        /**
         * 异常码
         */
        errorCode?: string;
        /**
         * 返回消息
         */
        errorMsg?: string;
        success?: boolean;
    }
    /**
     * BaseResultOfSaveLabelInfoResponse
     */
    export interface BaseResultOfSaveLabelInfoResponse {
        /**
         * 业务数据
         */
        data?: SaveLabelInfoResponse;
        /**
         * 异常码
         */
        errorCode?: string;
        /**
         * 返回消息
         */
        errorMsg?: string;
        success?: boolean;
    }
    /**
     * BaseResultOfSemiLabelingResponse
     */
    export interface BaseResultOfSemiLabelingResponse {
        /**
         * 业务数据
         */
        data?: SemiLabelingResponse;
        /**
         * 异常码
         */
        errorCode?: string;
        /**
         * 返回消息
         */
        errorMsg?: string;
        success?: boolean;
    }
    /**
     * BaseResultOfShareGroupListResponse
     */
    export interface BaseResultOfShareGroupListResponse {
        /**
         * 业务数据
         */
        data?: ShareGroupListResponse;
        /**
         * 异常码
         */
        errorCode?: string;
        /**
         * 返回消息
         */
        errorMsg?: string;
        success?: boolean;
    }
    /**
     * BaseResultOfShareModelListResponse
     */
    export interface BaseResultOfShareModelListResponse {
        /**
         * 业务数据
         */
        data?: ShareModelListResponse;
        /**
         * 异常码
         */
        errorCode?: string;
        /**
         * 返回消息
         */
        errorMsg?: string;
        success?: boolean;
    }
    /**
     * BaseResultOfUploadResponse
     */
    export interface BaseResultOfUploadResponse {
        /**
         * 业务数据
         */
        data?: UploadResponse;
        /**
         * 异常码
         */
        errorCode?: string;
        /**
         * 返回消息
         */
        errorMsg?: string;
        success?: boolean;
    }
    /**
     * BaseResultOfUploadResult
     */
    export interface BaseResultOfUploadResult {
        /**
         * 业务数据
         */
        data?: UploadResult;
        /**
         * 异常码
         */
        errorCode?: string;
        /**
         * 返回消息
         */
        errorMsg?: string;
        success?: boolean;
    }
    /**
     * BaseResultOfUserDataset
     */
    export interface BaseResultOfUserDataset {
        /**
         * 业务数据
         */
        data?: UserDataset;
        /**
         * 异常码
         */
        errorCode?: string;
        /**
         * 返回消息
         */
        errorMsg?: string;
        success?: boolean;
    }
    /**
     * BaseResultOfUserDatasetResponse
     */
    export interface BaseResultOfUserDatasetResponse {
        /**
         * 业务数据
         */
        data?: UserDatasetResponse;
        /**
         * 异常码
         */
        errorCode?: string;
        /**
         * 返回消息
         */
        errorMsg?: string;
        success?: boolean;
    }
    /**
     * BaseResultOfUserModelsResponse
     */
    export interface BaseResultOfUserModelsResponse {
        /**
         * 业务数据
         */
        data?: UserModelsResponse;
        /**
         * 异常码
         */
        errorCode?: string;
        /**
         * 返回消息
         */
        errorMsg?: string;
        success?: boolean;
    }
    /**
     * BaseResultOfUserResponse
     */
    export interface BaseResultOfUserResponse {
        /**
         * 业务数据
         */
        data?: UserResponse;
        /**
         * 异常码
         */
        errorCode?: string;
        /**
         * 返回消息
         */
        errorMsg?: string;
        success?: boolean;
    }
    /**
     * BaseResultOfVerifyCodeDataResponse
     */
    export interface BaseResultOfVerifyCodeDataResponse {
        /**
         * 业务数据
         */
        data?: VerifyCodeDataResponse;
        /**
         * 异常码
         */
        errorCode?: string;
        /**
         * 返回消息
         */
        errorMsg?: string;
        success?: boolean;
    }
    /**
     * BaseResultOfVersionsListResponse
     */
    export interface BaseResultOfVersionsListResponse {
        /**
         * 业务数据
         */
        data?: VersionsListResponse;
        /**
         * 异常码
         */
        errorCode?: string;
        /**
         * 返回消息
         */
        errorMsg?: string;
        success?: boolean;
    }
    /**
     * BaseResultOfWorkflowResponse
     */
    export interface BaseResultOfWorkflowResponse {
        /**
         * 业务数据
         */
        data?: WorkflowResponse;
        /**
         * 异常码
         */
        errorCode?: string;
        /**
         * 返回消息
         */
        errorMsg?: string;
        success?: boolean;
    }
    /**
     * BaseResultOfobject
     */
    export interface BaseResultOfobject {
        /**
         * 业务数据
         */
        data?: {
        };
        /**
         * 异常码
         */
        errorCode?: string;
        /**
         * 返回消息
         */
        errorMsg?: string;
        success?: boolean;
    }
    /**
     * BaseResultOfstring
     */
    export interface BaseResultOfstring {
        /**
         * 业务数据
         */
        data?: string;
        /**
         * 异常码
         */
        errorCode?: string;
        /**
         * 返回消息
         */
        errorMsg?: string;
        success?: boolean;
    }
    /**
     * BaseResultOf模型评测记录列表-ReviewRecordResonse
     */
    export interface BaseResultOf_ReviewRecordResonse {
        /**
         * 业务数据
         */
        data?: _ReviewRecordResonse;
        /**
         * 异常码
         */
        errorCode?: string;
        /**
         * 返回消息
         */
        errorMsg?: string;
        success?: boolean;
    }
    /**
     * BaseResultOf评测信息-RecordDetailResponse
     */
    export interface BaseResultOf_RecordDetailResponse {
        /**
         * 业务数据
         */
        data?: _RecordDetailResponse;
        /**
         * 异常码
         */
        errorCode?: string;
        /**
         * 返回消息
         */
        errorMsg?: string;
        success?: boolean;
    }
    /**
     * BatchDeleteModelRequest
     */
    export interface BatchDeleteModelRequest {
        /**
         * 需要删除的模型序号
         */
        modelSerials?: DeleteModelRequest[];
    }
    /**
     * BatchStopTrainingRequest
     */
    export interface BatchStopTrainingRequest {
        /**
         * 终止列表
         */
        stopList?: StopTrainingRequest[];
    }
    /**
     * BatchStopTrainingResponse
     */
    export interface BatchStopTrainingResponse {
        /**
         * 失败的数量
         */
        fail?: number; // int32
        /**
         * 成功的数量
         */
        success?: number; // int32
    }
    /**
     * ChangeUserPasswordRequest
     */
    export interface ChangeUserPasswordRequest {
        /**
         * 新密码
         */
        newPassword?: string;
        /**
         * 旧密码
         */
        oldPassword?: string;
    }
    /**
     * CreateDatasetRequest
     */
    export interface CreateDatasetRequest {
        /**
         * 数据集名称
         */
        datasetName?: string;
        /**
         * 数据源
         */
        datasetSources?: string[];
        /**
         * 数据集描述
         */
        description?: string;
        /**
         * 群组类型，1-普通用户群组，2-标注员群组
         */
        groupTypeEnum?: "USER_GROUP" | "LABELER_GROUP";
        /**
         * 标注指导
         */
        guide?: string;
        /**
         * 标注员群组序列号
         */
        labelerGroupSerial?: string[];
        /**
         * 关联模型序列号
         */
        modelSerial?: string;
        /**
         * 数据集权限
         */
        visibility?: "PRIVATE" | "GROUP_SHARE" | "PUBLIC";
    }
    /**
     * CreateLabel
     */
    export interface CreateLabel {
        /**
         * 标签背景颜色
         */
        bgColor?: string;
        /**
         * 标签字体颜色
         */
        color?: string;
        /**
         * 标签名，长度在小于20
         */
        name?: string;
    }
    /**
     * CreateModelRequest
     */
    export interface CreateModelRequest {
        /**
         * 模型描述，支持中英文、数字、下划线，长度不得超过100个字符。
         */
        desc?: string;
        /**
         * 标签列表
         */
        labelList?: CreateLabel[];
        /**
         * 模型名称是全局唯一的；支持中英文、数字、下划线，长度不得超过20个字符
         */
        name?: string;
        /**
         * 模型权限
         */
        visibility?: string;
    }
    /**
     * CreateModelReviewRequest
     */
    export interface CreateModelReviewRequest {
        /**
         * 模型serial
         */
        modelGroupSerial?: string;
        /**
         * 评测集名称，多个时以英文逗号分隔
         */
        reviewDatasetNames?: string;
        /**
         * 评测集标识serials
         */
        reviewDatasetSerials?: string[];
        /**
         * 评测图片分布
         */
        reviewDistribute?: ReviewDistributeResponse;
        /**
         * 评测图片总数
         */
        reviewTotals?: number; // int64
        /**
         * 评测版本,如 1.6
         */
        reviewVersions?: string[];
    }
    /**
     * DatasetDetailResponse
     */
    export interface DatasetDetailResponse {
        /**
         * 创建时间
         */
        createTime?: string; // date-time
        /**
         * 数据集名称
         */
        datasetName?: string;
        /**
         * 数据集序号
         */
        datasetSerial?: string;
        /**
         * 数据集id
         */
        dataset_id?: number; // int64
        /**
         * 数据中心 数据集id
         */
        dc_dataset_id?: string;
        /**
         * 描述
         */
        desc?: string;
        /**
         * 标注指导
         */
        guide?: string;
        /**
         * 标注员群组
         */
        labelerGroup?: string[];
        /**
         * 关联模型名称
         */
        modelName?: string;
        /**
         * 图片量
         */
        pictureNum?: number; // int64
        /**
         * 权限
         */
        visibility?: "PRIVATE" | "GROUP_SHARE" | "PUBLIC";
    }
    /**
     * DatasetDistributionResponse
     */
    export interface DatasetDistributionResponse {
        /**
         * 数据集有效总数
         */
        datasetTotal?: number; // int32
        /**
         * 数据集分布项
         */
        distributions?: Distribution[];
    }
    /**
     * DatasetImageUsageResponse
     */
    export interface DatasetImageUsageResponse {
        /**
         * 数据集有效总数
         */
        imageTotal?: number; // int32
        /**
         * 已标注图片有效数量
         */
        labeledTotal?: number; // int32
        /**
         * 已训练图片有效数量
         */
        trainTotal?: number; // int32
    }
    /**
     * DatasetInfo
     */
    export interface DatasetInfo {
        /**
         * 数据集名
         */
        datasetName?: string;
        /**
         * 本数据集标签信息
         */
        labels?: LabelCountInfo[];
    }
    /**
     * DatasetLabelResponse
     */
    export interface DatasetLabelResponse {
        /**
         * 标签列表
         */
        labels?: Label[];
    }
    /**
     * DatasetList
     */
    export interface DatasetList {
        /**
         * 创建时间
         */
        createTime?: string; // date-time
        /**
         * 创建者名称
         */
        creatorName?: string;
        /**
         * 数据集名称
         */
        datasetName?: string;
        /**
         * 数据集序列号
         */
        datasetSerial?: string;
        /**
         * 描述
         */
        desc?: string;
        /**
         * 所属群组
         */
        groupName?: string;
        /**
         * 标注指导
         */
        guide?: string;
        /**
         * 是否有半自动标注任务结束
         */
        isHasAutolabeltask?: boolean;
        /**
         * 关联模型名称
         */
        modelName?: string;
        /**
         * 图片量
         */
        pictureNum?: number; // int32
        /**
         * 数据集状态
         */
        status?: "ALL" | "CREATING" | "IMPORT_FAILED" | "TO_BE_LABEL" | "LABELING" | "TO_BE_RELEASE" | "RELEASING" | "RELEASED" | "RELEASE_FAILED";
        /**
         * 关联模型类型
         */
        type?: "ALL" | "OBJECT_DETECTION" | "IMAGE_CLASSIFICATION" | "FACE_RECOGNITION" | "CHARACTER_DETECTION" | "CHARACTER_RECOGNITION";
        /**
         * 权限
         */
        visibility?: "PRIVATE" | "GROUP_SHARE" | "PUBLIC";
    }
    /**
     * DatasetListResponse
     */
    export interface DatasetListResponse {
        /**
         * 数据集列表
         */
        datasetLists?: DatasetList[];
        /**
         * 总数
         */
        total?: number; // int32
    }
    /**
     * DatasetSource
     */
    export interface DatasetSource {
        /**
         * 数据集名称
         */
        name?: string;
        /**
         * 数据集编号
         */
        serial?: string;
    }
    /**
     * DatasetSourceResponse
     */
    export interface DatasetSourceResponse {
        /**
         * 用户有权限看到的数据源列表
         */
        userDatasets?: DatasetSource[];
    }
    /**
     * DatasetStatusDistributionResponse
     */
    export interface DatasetStatusDistributionResponse {
        /**
         * 数据集状态分布
         */
        datasetStatusDistribute?: Distribution[];
        /**
         * 数据集名称
         */
        name?: string;
    }
    /**
     * DatasetUsageResponse
     */
    export interface DatasetUsageResponse {
        /**
         * 数据集有效总数
         */
        datasetTotal?: number; // int32
        /**
         * 已标注数据集有效数量
         */
        labeledTotal?: number; // int32
        /**
         * 已训练数据集有效数量
         */
        trainTotal?: number; // int32
    }
    /**
     * DeleteDatasetRequest
     */
    export interface DeleteDatasetRequest {
        /**
         * 批量删除数据集编号数组
         */
        datasetSerials?: string[];
    }
    /**
     * DeleteModelRequest
     */
    export interface DeleteModelRequest {
        /**
         * 模型编号
         */
        modelSerial?: string;
        /**
         * 版本
         */
        version?: string;
    }
    /**
     * Distribution
     */
    export interface Distribution {
        /**
         * 数据集表示颜色
         */
        color?: string;
        /**
         * 数据集状态
         */
        datasetStatus?: string;
        /**
         * 数据集属性信息
         */
        itemStyle?: string;
        /**
         * 数据集类型名称
         */
        name?: string;
        /**
         * 数据集占比
         */
        percentage?: string;
        /**
         * 数据集数量
         */
        value?: number; // int32
    }
    /**
     * EvaluationRequest
     */
    export interface EvaluationRequest {
        /**
         * 模型编号
         */
        modelSerial?: string;
        /**
         * 评测集
         */
        testSetSerial?: string;
        /**
         * 评测版本
         */
        versions?: string[];
    }
    /**
     * Group
     */
    export interface Group {
        /**
         * 群组名称
         */
        name?: string;
        /**
         * 序号
         */
        serial?: string;
    }
    /**
     * GroupInfoParam
     */
    export interface GroupInfoParam {
        /**
         * 用户组类型.1-普通用户组,2-标注员组
         */
        groupType?: "USER_GROUP" | "LABELER_GROUP";
        /**
         * 用户组名
         */
        name?: string;
    }
    /**
     * GroupList
     */
    export interface GroupList {
        /**
         * 群组名称
         */
        name?: string;
        /**
         * 群组序列号
         */
        serial?: string;
    }
    /**
     * GroupListForChoiceResponse
     */
    export interface GroupListForChoiceResponse {
        /**
         * 群组列表
         */
        groupList?: GroupList[];
    }
    /**
     * GroupResponse
     */
    export interface GroupResponse {
        /**
         * 组群拥有数据集个数
         */
        dataSetCount?: number; // int64
        /**
         * 群组名称
         */
        groupName?: string;
        /**
         * 群组序列号
         */
        groupSerial?: string;
        /**
         * 群组人数
         */
        groupUserCount?: number; // int64
        /**
         * 组群拥有模型数量
         */
        modelCount?: number; // int64
    }
    /**
     * Image
     */
    export interface Image {
        /**
         * 数据Id
         */
        dataId?: string;
        /**
         * 文本识别内容
         */
        detectionContent?: string;
        /**
         * 标注信息
         */
        label?: string;
        /**
         * 预览图片状态
         */
        status?: "ALL" | "UNMARKED" | "LABELED";
        /**
         * 图片URL
         */
        url?: string;
    }
    /**
     * ImagePreviewResponse
     */
    export interface ImagePreviewResponse {
        /**
         * 图片列表
         */
        images?: Image[];
        /**
         * 数据集状态
         */
        status?: "ALL" | "CREATING" | "IMPORT_FAILED" | "TO_BE_LABEL" | "LABELING" | "TO_BE_RELEASE" | "RELEASING" | "RELEASED" | "RELEASE_FAILED";
    }
    /**
     * IncrementDataRequest
     */
    export interface IncrementDataRequest {
        /**
         * 数据创建时间
         */
        createTime?: string;
        /**
         * 文件map
         */
        fileMap?: {
            [name: string]: IncrementValue;
        };
        /**
         * 数据量
         */
        number?: number; // int64
        /**
         * 数据存储方式
         */
        storageMode?: string;
        /**
         * 数据类型
         */
        type?: number; // int32
        /**
         * 数据版本
         */
        version?: string;
    }
    /**
     * IncrementDataResponse
     */
    export interface IncrementDataResponse {
        /**
         * 是否接入成功
         */
        isAccess?: boolean;
        /**
         * 接入信息
         */
        message?: string;
    }
    /**
     * IncrementValue
     */
    export interface IncrementValue {
        /**
         * key值
         */
        key?: string;
        /**
         * market
         */
        market?: string;
        /**
         * 文件路径
         */
        source?: string;
        /**
         * 存储方式
         */
        storageMode?: string;
    }
    /**
     * ItemStyle
     */
    export interface ItemStyle {
        /**
         * 颜色
         */
        color?: string;
    }
    /**
     * JSONObject
     */
    export interface JSONObject {
        [name: string]: {
        };
    }
    /**
     * Label
     */
    export interface Label {
        /**
         * 标签背景颜色
         */
        bgColor?: string;
        /**
         * 标签字体颜色
         */
        color?: string;
        /**
         * 标签编号
         */
        id?: number; // int64
        /**
         * 标签名
         */
        name?: string;
        /**
         * 模型序列
         */
        sequence?: number; // int32
    }
    /**
     * LabelCountInfo
     */
    export interface LabelCountInfo {
        /**
         * 标签名
         */
        labelName?: string;
        /**
         * 该模型的sequence
         */
        sequence?: number; // int32
        /**
         * 本数据集内出现数
         */
        total?: string;
    }
    /**
     * LabelDataParam
     */
    export interface LabelDataParam {
        /**
         * 颜色
         */
        bgColor?: string;
        /**
         * 颜色
         */
        color?: string;
        /**
         * 标注角标 endX
         */
        endX?: number; // double
        /**
         * 标注角标 endY
         */
        endY?: number; // double
        /**
         * 是否忽略
         */
        isIgnored?: boolean;
        /**
         * 标签ID
         */
        labelId?: number; // int64
        /**
         * 文本检测多边形标注点
         */
        point?: number /* double */ [];
        /**
         * 标注角标 startX
         */
        startX?: number; // double
        /**
         * 标注角标 startY
         */
        startY?: number; // double
        /**
         * tag
         */
        tag?: string;
        /**
         * text
         */
        text?: string;
    }
    /**
     * LabelInfoResponse
     */
    export interface LabelInfoResponse {
        /**
         * 已标注图片
         */
        labelCount?: number; // int64
        /**
         * 标注信息
         */
        ldl?: LabelingDTO[];
        /**
         * 数据集图片数量
         */
        totalCount?: number; // int64
    }
    /**
     * LabelUsage
     */
    export interface LabelUsage {
        /**
         * 标签编号
         */
        id?: number; // int32
        /**
         * 标签名
         */
        name?: string;
        /**
         * 使用次数
         */
        usage?: number; // int64
    }
    /**
     * LabelUsageResponse
     */
    export interface LabelUsageResponse {
        /**
         * ocr评测集
         */
        testOcr?: OcrDataNumInfo;
        /**
         * 测试集标签使用情况
         */
        testSetUsage?: LabelUsage[];
        /**
         * ocr训练集
         */
        trainingOcr?: OcrDataNumInfo;
        /**
         * 训练集标签使用情况
         */
        trainingSetUsage?: LabelUsage[];
    }
    /**
     * LabeledDatasetDistributionResponse
     */
    export interface LabeledDatasetDistributionResponse {
        /**
         * 数据集类型名称
         */
        name?: string;
        /**
         * 数据集数量
         */
        value?: number; // int32
    }
    /**
     * LabelingDTO
     */
    export interface LabelingDTO {
        /**
         * 图片序号
         */
        dataId?: string;
        /**
         * 数据集编号
         */
        datasetSerial?: string;
        /**
         * 文本识别内容
         */
        detectionContent?: string;
        /**
         * 图片高度
         */
        height?: number; // int32
        /**
         * 标签ID
         */
        labelId?: number; // int64
        /**
         * 该图片的状态
         */
        labelType?: "UNKNOWN_LABEL" | "HUMAN" | "FULLY_AUTOMATIC" | "SEMI_AUTOMATIC" | "REVIEW" | "UNRECOGNIZED";
        /**
         * 标注信息
         */
        labelingData?: LabelDataParam[];
        /**
         * 前端暂存标注信息
         */
        labeling_front?: string;
        /**
         * 模型类型
         */
        modelType?: "ALL" | "OBJECT_DETECTION" | "IMAGE_CLASSIFICATION" | "FACE_RECOGNITION" | "CHARACTER_DETECTION" | "CHARACTER_RECOGNITION";
        /**
         * 数值范围
         */
        scale?: string;
        /**
         * taskTypeEnum 
         */
        taskTypeEnum?: "HUMAN" | "REVIEW";
        /**
         * 是否有效
         */
        valid?: boolean;
        /**
         * 图片宽度
         */
        width?: number; // int32
    }
    /**
     * LabelingResult
     */
    export interface LabelingResult {
        /**
         * 图片状态
         */
        b_status?: number; // int32
        /**
         * 图片ID
         */
        dataId?: string;
        /**
         * 标注结果
         */
        labelingResult?: string;
        /**
         * 前端暂存标注信息
         */
        labeling_front?: string;
        /**
         * 图片URL
         */
        url?: string;
    }
    /**
     * LabelingTaskResponse
     */
    export interface LabelingTaskResponse {
        /**
         * 图片ID列表
         */
        dataIdList?: LabelingResult[];
        /**
         * 上次标注任务是否需要被释放
         */
        needFinished?: boolean;
    }
    /**
     * LoginInfoParam
     * 登陆参数
     */
    export interface LoginInfoParam {
        /**
         * 授权类型
         */
        grant_type?: string;
        /**
         * 密码
         */
        password?: string;
        /**
         * 账号
         */
        username?: string;
        /**
         * 验证码
         */
        verifyCode?: string;
    }
    /**
     * ModelDetailResponse
     */
    export interface ModelDetailResponse {
        /**
         * 模型描述
         */
        desc?: string;
        /**
         * 标签列表
         */
        labels?: Label[];
        /**
         * 模型名称
         */
        modelName?: string;
        /**
         * 模型文件S3地址
         */
        modelS3?: string;
        /**
         * 模型序号
         */
        modelSerial?: string;
        /**
         * 版本
         */
        version?: string;
    }
    /**
     * ModelHistorySetResponse
     */
    export interface ModelHistorySetResponse {
        /**
         * 历史评测集
         */
        modelTestSets?: ModelTestSetResponse[];
        /**
         * 历史训练集
         */
        modelTrainSets?: ModelTestSetResponse[];
    }
    /**
     * ModelIndexItem
     */
    export interface ModelIndexItem {
        name?: string;
        value?: number; // double
    }
    /**
     * ModelIndicatorsReponse
     */
    export interface ModelIndicatorsReponse {
        /**
         * 模型标签关系 sequence:labelName
         */
        modelLabelInfos?: {
        };
        /**
         * 单个模型指标
         */
        modelVersions?: ModelInfo[];
        /**
         * 模型名称
         */
        name?: string;
        /**
         * 评测集名称，多个时以英文逗号分隔
         */
        reviewDatasetNames?: string;
        /**
         * 评测版本
         */
        reviewVersions?: string;
    }
    /**
     * ModelInfo
     */
    export interface ModelInfo {
        /**
         * 评测指标
         */
        evaluateResult?: {
        };
        /**
         * 单个模型版本号
         */
        modelVersion?: string;
    }
    /**
     * ModelQuantityDistributeResponse
     */
    export interface ModelQuantityDistributeResponse {
        /**
         * 统计条目风格，一般主要是统计条目展示颜色的控制
         */
        itemStyle?: ItemStyle;
        /**
         * 分类名称
         */
        name?: string;
        /**
         * 数量
         */
        value?: number; // int32
    }
    /**
     * ModelStatusDistribute
     */
    export interface ModelStatusDistribute {
        /**
         * 颜色
         */
        color?: string;
        /**
         * 模型状态
         */
        modelStatus?: string;
        /**
         * 百分比
         */
        percentage?: string;
    }
    /**
     * ModelStatusDistributeResponse
     */
    export interface ModelStatusDistributeResponse {
        modelStatusDistribute?: ModelStatusDistribute[];
        /**
         * 模型类型名称
         */
        name?: string;
    }
    /**
     * ModelTestSetResponse
     */
    export interface ModelTestSetResponse {
        /**
         * 测试集名称
         */
        name?: string;
        /**
         * 测试集serial
         */
        serial?: string;
    }
    /**
     * ModelTrainingElapsedResponse
     */
    export interface ModelTrainingElapsedResponse {
        name?: string;
        value?: number; // int32
    }
    /**
     * ModelVersion
     */
    export interface ModelVersion {
        /**
         * 模型版本编号
         */
        modelVersion?: string;
        /**
         * 模型名称
         */
        name?: string;
        /**
         * 模型版本标识
         */
        serial?: string;
    }
    /**
     * ModelVersionsResponse
     */
    export interface ModelVersionsResponse {
        /**
         * 用户有权限看到的数据集列表
         */
        modelVersions?: ModelVersion[];
        /**
         * 总数
         */
        total?: number; // int64
    }
    /**
     * ModifyDatasetRequest
     */
    export interface ModifyDatasetRequest {
        /**
         * 数据集名称
         */
        datasetName?: string;
        /**
         * 数据集描述
         */
        desc?: string;
        /**
         * 标注指导
         */
        guide?: string;
    }
    /**
     * ModifyModel
     */
    export interface ModifyModel {
        /**
         * 标签编号
         */
        id?: number; // int64
        /**
         * 标签名，长度在小于20
         */
        name?: string;
    }
    /**
     * ModifyModelRequest
     */
    export interface ModifyModelRequest {
        /**
         * 模型描述，支持中英文、数字、下划线，长度不得超过100个字符。
         */
        desc?: string;
        /**
         * 模型序号
         */
        modelSerial?: string;
        /**
         * 修改标签列表
         */
        modifyLabel?: ModifyModel[];
        /**
         * 模型名称是全局唯一的；支持中英文、数字、下划线，长度不得超过20个字符
         */
        name?: string;
        /**
         * 新增标签列表
         */
        newLabel?: CreateLabel[];
        /**
         * 模型版本
         */
        version?: string;
    }
    /**
     * ModifyVisibilityRequest
     */
    export interface ModifyVisibilityRequest {
        /**
         * 模型版本
         */
        version?: string;
        /**
         * 模型权限
         */
        visibility?: "PRIVATE" | "GROUP_SHARE" | "PUBLIC";
    }
    /**
     * MyModelListResponse
     */
    export interface MyModelListResponse {
        /**
         * 模型列表
         */
        models?: MyModelResponse[];
        /**
         * 总数
         */
        total?: number; // int32
    }
    /**
     * MyModelResponse
     */
    export interface MyModelResponse {
        bjobId?: string;
        /**
         * 所有版本的模型数量
         */
        count?: number; // int32
        /**
         * 创建时间
         */
        createTime?: string; // date-time
        /**
         * 模型描述
         */
        description?: string;
        /**
         * 模型名称
         */
        name?: string;
        /**
         * 模型序号
         */
        serial?: string;
        /**
         * 训练已完成stage数量
         */
        stage?: number; // int64
        /**
         * 训练进度stage总数
         */
        stageCount?: number; // int64
        /**
         * 模型状态
         */
        status?: "ALL" | "CREATING" | "TRAINING_INIT" | "TRAINING" | "TRAINING_FINISHED" | "TRAINING_FAILED" | "TRAINING_STOPPED" | "EVALUATION_INIT" | "EVALUATING" | "EVALUATED" | "EVALUATE_FAILED" | "PUBLISH_INIT" | "PUBLISHING" | "PUBLISHED" | "PUBLISH_FAILED";
        /**
         * 训练成功的数量
         */
        successCount?: number; // int32
        tjobId?: string;
        /**
         * 推送至算法仓状态
         */
        toViper?: number; // int32
        /**
         * 训练者
         */
        trainer?: string;
        /**
         * 模型类型
         */
        type?: "ALL" | "OBJECT_DETECTION" | "IMAGE_CLASSIFICATION" | "FACE_RECOGNITION" | "CHARACTER_DETECTION" | "CHARACTER_RECOGNITION";
        /**
         * 模型版本
         */
        version?: string;
        /**
         * 模型可见性
         */
        visibility?: "PRIVATE" | "GROUP_SHARE" | "PUBLIC";
    }
    /**
     * NodesDTO
     */
    export interface NodesDTO {
        cpu?: string;
        created_at?: string; // date-time
        description?: string;
        fixed?: string;
        gpu?: string;
        group_id?: string;
        group_name?: string;
        id?: number; // int32
        memory?: string;
        name?: string;
        parallelism?: string;
        user_id?: string;
        user_name?: string;
        version?: string;
        visibility?: string;
    }
    /**
     * OcrDataNumInfo
     */
    export interface OcrDataNumInfo {
        /**
         * 图片数量
         */
        imageNum?: number; // int64
        /**
         * 检测框数量
         */
        labelNum?: number; // int64
    }
    /**
     * PageResponseOfGroupResponse
     * 分页查询结果
     */
    export interface PageResponseOfGroupResponse {
        /**
         * 当前页
         */
        currentPage?: number; // int64
        /**
         * 返回列表数据
         */
        list?: GroupResponse[];
        /**
         * 每页大小
         */
        pageSize?: number; // int64
        /**
         * 总记录数
         */
        total?: number; // int64
        /**
         * 总页数
         */
        totalPage?: number; // int64
    }
    /**
     * PageResponseOfNodesDTO
     * 分页查询结果
     */
    export interface PageResponseOfNodesDTO {
        /**
         * 当前页
         */
        currentPage?: number; // int64
        /**
         * 返回列表数据
         */
        list?: NodesDTO[];
        /**
         * 每页大小
         */
        pageSize?: number; // int64
        /**
         * 总记录数
         */
        total?: number; // int64
        /**
         * 总页数
         */
        totalPage?: number; // int64
    }
    /**
     * PageResponseOfRoleResponse
     * 分页查询结果
     */
    export interface PageResponseOfRoleResponse {
        /**
         * 当前页
         */
        currentPage?: number; // int64
        /**
         * 返回列表数据
         */
        list?: RoleResponse[];
        /**
         * 每页大小
         */
        pageSize?: number; // int64
        /**
         * 总记录数
         */
        total?: number; // int64
        /**
         * 总页数
         */
        totalPage?: number; // int64
    }
    /**
     * PageResponseOfUserResponse
     * 分页查询结果
     */
    export interface PageResponseOfUserResponse {
        /**
         * 当前页
         */
        currentPage?: number; // int64
        /**
         * 返回列表数据
         */
        list?: UserResponse[];
        /**
         * 每页大小
         */
        pageSize?: number; // int64
        /**
         * 总记录数
         */
        total?: number; // int64
        /**
         * 总页数
         */
        totalPage?: number; // int64
    }
    /**
     * PageResponseOfWorkFlowsDTO
     * 分页查询结果
     */
    export interface PageResponseOfWorkFlowsDTO {
        /**
         * 当前页
         */
        currentPage?: number; // int64
        /**
         * 返回列表数据
         */
        list?: WorkFlowsDTO[];
        /**
         * 每页大小
         */
        pageSize?: number; // int64
        /**
         * 总记录数
         */
        total?: number; // int64
        /**
         * 总页数
         */
        totalPage?: number; // int64
    }
    /**
     * PublishModelRequest
     */
    export interface PublishModelRequest {
        /**
         * 模型编号
         */
        modelSerial?: string;
        /**
         * 模型版本
         */
        version?: string;
    }
    /**
     * ReleaseResponse
     */
    export interface ReleaseResponse {
        releaseResult?: boolean;
    }
    /**
     * ResetUserPasswordRequest
     */
    export interface ResetUserPasswordRequest {
        /**
         * 用户重置密码
         */
        password?: string;
    }
    /**
     * ReviewDatasetResponse
     */
    export interface ReviewDatasetResponse {
        /**
         * 总数
         */
        total?: number; // int64
        /**
         * 用户有权限看到的数据集列表
         */
        userDatasets?: UserDataset[];
    }
    /**
     * ReviewDistributeRequest
     */
    export interface ReviewDistributeRequest {
        /**
         * 所选评测集serial列表
         */
        datasetSerials?: string[];
        /**
         * 模型序列号
         */
        modelSerial?: string;
    }
    /**
     * ReviewDistributeResponse
     */
    export interface ReviewDistributeResponse {
        /**
         * 用户选中的评测图片分布
         */
        reviewDistributes?: DatasetInfo[];
    }
    /**
     * ReviewRecord
     */
    export interface ReviewRecord {
        /**
         * 评测记录创建时间
         */
        createTime?: string; // date-time
        /**
         * 模型类别
         */
        modelType?: "ALL" | "OBJECT_DETECTION" | "IMAGE_CLASSIFICATION";
        /**
         * 模型名称
         */
        name?: string;
        /**
         * 评测记录查询ID
         */
        recordId?: number; // int64
        /**
         * 评测集名称，多个时以英文逗号分隔
         */
        reviewDatasetNames?: string;
        /**
         * 评测版本
         */
        reviewVersions?: string;
        /**
         * 评测记录状态
         */
        status?: "ALL" | "EVALUATING" | "EVALUATED" | "EVALUATE_FAILED";
    }
    /**
     * ReviewUserDatasetRequest
     */
    export interface ReviewUserDatasetRequest {
        /**
         * 模型序列号
         */
        modelSerial?: string;
        /**
         * 当前页
         */
        page?: number; // int32
        /**
         * 评测版本,如 1.6.0
         */
        reviewVersions?: string[];
        /**
         * 分页大小
         */
        size?: number; // int32
    }
    /**
     * RoleResponse
     * 角色信息
     */
    export interface RoleResponse {
        /**
         * 创建时间
         */
        createTime?: string; // date-time
        /**
         * 创建者
         */
        creator?: number; // int64
        /**
         * 是否删除，0-未删除；1-已删除
         */
        deleted?: number; // int32
        /**
         * 备注
         */
        remark?: string;
        /**
         * 编码
         */
        roleCode?: string;
        /**
         * 角色id
         */
        roleId?: number; // int32
        /**
         * 角色名称
         */
        roleName?: string;
        /**
         * 角色状态
         */
        state?: number; // int32
        /**
         * 更新时间
         */
        updateTime?: string; // date-time
        /**
         * 角色用户数
         */
        userNum?: number; // int32
    }
    /**
     * SaveLabelInfoResponse
     */
    export interface SaveLabelInfoResponse {
        /**
         * 当前数据集是否完成
         */
        dataset_finished?: boolean;
        /**
         * 当前标注任务是否完成
         */
        finished?: boolean;
    }
    /**
     * SemiLabelingResponse
     */
    export interface SemiLabelingResponse {
        /**
         * 按钮是否置灰,ash：是否置灰，true-是的,置灰；false-不了，亮着吧
         */
        ash?: boolean;
        /**
         * 半自动任务是否开始/进度,参数见 SemiLabelingStatusEnum 
         */
        isStarted?: number; // int32
    }
    /**
     * ShareGroupListResponse
     */
    export interface ShareGroupListResponse {
        /**
         * 群组列表
         */
        groups?: Group[];
    }
    /**
     * ShareModelListResponse
     */
    export interface ShareModelListResponse {
        /**
         * 模型列表
         */
        models?: ShareModelResponse[];
        /**
         * 总数
         */
        total?: number; // int32
    }
    /**
     * ShareModelResponse
     */
    export interface ShareModelResponse {
        bjobId?: string;
        /**
         * 所有版本的模型数量
         */
        count?: number; // int32
        /**
         * 创建时间
         */
        createTime?: string; // date-time
        /**
         * 创建者
         */
        creator?: string;
        /**
         * 模型描述
         */
        description?: string;
        /**
         * 群组名称
         */
        group?: string;
        /**
         * 模型名称
         */
        name?: string;
        /**
         * 模型序号
         */
        serial?: string;
        /**
         * 训练已完成stage数量
         */
        stage?: number; // int64
        /**
         * 训练stage数量
         */
        stageCount?: number; // int64
        /**
         * 模型状态
         */
        status?: "ALL" | "CREATING" | "TRAINING_INIT" | "TRAINING" | "TRAINING_FINISHED" | "TRAINING_FAILED" | "TRAINING_STOPPED" | "EVALUATION_INIT" | "EVALUATING" | "EVALUATED" | "EVALUATE_FAILED" | "PUBLISH_INIT" | "PUBLISHING" | "PUBLISHED" | "PUBLISH_FAILED";
        /**
         * 训练成功的数量
         */
        successCount?: number; // int32
        tjobId?: string;
        /**
         * 训练者
         */
        trainer?: string;
        /**
         * 模型类型
         */
        type?: "ALL" | "OBJECT_DETECTION" | "IMAGE_CLASSIFICATION" | "FACE_RECOGNITION" | "CHARACTER_DETECTION" | "CHARACTER_RECOGNITION";
        /**
         * 模型版本
         */
        version?: string;
        /**
         * 模型可见性
         */
        visibility?: "PRIVATE" | "GROUP_SHARE" | "PUBLIC";
    }
    /**
     * StopTrainingRequest
     */
    export interface StopTrainingRequest {
        /**
         * 模型编号
         */
        modelSerial?: string;
        /**
         * 版本
         */
        version?: string;
    }
    /**
     * TrainingModelRequest
     */
    export interface TrainingModelRequest {
        /**
         * 模型描述，支持中英文、数字、下划线，长度不得超过100个字符。
         */
        description?: string;
        /**
         * 评测集，评测集一旦确定，后续对此模型优化，都将使用此评测机进行评测, 人脸算法的评测集由系统预置，用户不可选择
         */
        testSetSerial?: string[];
        /**
         * 训练集序号, POD算法和人脸算法都需要用户选择
         */
        trainingSetSerial?: string[];
        /**
         * 训练的模型版本，如果为人脸训练，且此值为空的情况下，使用系统内部预置人脸基础模型
         */
        version?: string;
        /**
         * 工作流模板序号, POD算法提供用户选择, 人脸算法的工作流模版系统内置，无需用户选择
         */
        workflowId?: string;
    }
    /**
     * Type
     */
    export interface Type {
        typeName?: string;
    }
    /**
     * UUMSRole
     */
    export interface UUMSRole {
        code?: string;
        createTime?: string; // date-time
        creator?: number; // int64
        deleted?: number; // int32
        name?: string;
        remark?: string;
        roleId?: number; // int32
        state?: number; // int32
        updateTime?: string; // date-time
        userNum?: number; // int32
        version?: number; // int32
    }
    /**
     * UploadParam
     */
    export interface UploadParam {
        /**
         * 数据集序号
         */
        datasetSerial?: string;
        /**
         * 文件名,以zip|tar|rar|7z|tar.gz结尾
         */
        fileName?: string;
        /**
         * 文件大小
         */
        fileSize?: number; // int64
        /**
         * 总分片数
         */
        totalChunk?: number; // int64
        /**
         * 上传任务编号,当任务断点续传时，前端将这个编号传过来
         */
        uploadId?: string;
    }
    /**
     * UploadResponse
     */
    export interface UploadResponse {
        expectedChunk?: number; // int64
        uploadId?: string;
    }
    /**
     * UploadResult
     */
    export interface UploadResult {
        /**
         * 是否完成上传
         */
        finished?: boolean;
        /**
         * 上传成功分片的MD5
         */
        md5?: string;
        /**
         * 上传任务编号
         */
        uploadId?: string;
    }
    /**
     * UserDataset
     */
    export interface UserDataset {
        /**
         * 数据集名称
         */
        name?: string;
        /**
         * 数据集编号
         */
        serial?: string;
        /**
         * 数据集图片数量
         */
        total?: number; // int32
    }
    /**
     * UserDatasetResponse
     */
    export interface UserDatasetResponse {
        /**
         * 用户有权限看到的数据集列表
         */
        userDatasets?: UserDataset[];
    }
    /**
     * UserInfoParam
     * 创建用户参数信息
     */
    export interface UserInfoParam {
        /**
         * 邮箱
         */
        email?: string;
        /**
         * 所属群组序列号
         */
        groupSerial?: string;
        /**
         * 用户头像URL
         */
        imageUrl?: string;
        password?: string;
        /**
         * 昵称
         */
        realname?: string;
        /**
         * 角色
         */
        roleList?: ("SYS_ADMIN" | "GROUP_ADMIN" | "USER" | "LABELER")[];
        /**
         * 用户状态，1-开启；2-禁用,默认为1
         */
        state?: number; // int32
        /**
         * 电话号码
         */
        telephone?: string;
        /**
         * 用户名
         */
        username?: string;
    }
    /**
     * UserModel
     */
    export interface UserModel {
        /**
         * 模型名称
         */
        name?: string;
        /**
         * 模型编号
         */
        serial?: string;
    }
    /**
     * UserModelsResponse
     */
    export interface UserModelsResponse {
        /**
         * 用户有权限看到的模型列表
         */
        userModels?: UserModel[];
    }
    /**
     * UserResponse
     * 用户信息
     */
    export interface UserResponse {
        /**
         * 创建时间
         */
        createTime?: string; // date-time
        /**
         * 创建人
         */
        creatorName?: string;
        /**
         * 邮箱
         */
        email?: string;
        /**
         * 所属群组名称
         */
        groupName?: string;
        /**
         * 所属群组序列号
         */
        groupSerial?: string;
        /**
         * 上次登陆时间
         */
        loadLast?: string; // date-time
        /**
         * 本次登陆时间
         */
        loadNow?: string; // date-time
        /**
         * 角色名称
         */
        roleName?: string;
        /**
         * 状态,1-正常，2-禁用
         */
        state?: number; // int32
        /**
         * 电话号码
         */
        telephone?: string;
        /**
         * 更新时间
         */
        updateTime?: string; // date-time
        /**
         * 用户id
         */
        userId?: number; // int64
        /**
         * 用户名
         */
        username?: string;
    }
    /**
     * VerifyCodeDataResponse
     * 验证码图片Base64
     */
    export interface VerifyCodeDataResponse {
        /**
         * 图片base64字符串
         */
        data?: string;
    }
    /**
     * VersionModel
     */
    export interface VersionModel {
        /**
         * 创建时间
         */
        createTime?: string; // date-time
        /**
         * 创建者
         */
        creator?: string;
        /**
         * 模型描述
         */
        description?: string;
        /**
         * 训练已完成stage数量
         */
        stage?: number; // int64
        /**
         * 训练进度stage总数
         */
        stageCount?: number; // int64
        /**
         * 模型状态
         */
        status?: "ALL" | "CREATING" | "TRAINING_INIT" | "TRAINING" | "TRAINING_FINISHED" | "TRAINING_FAILED" | "TRAINING_STOPPED" | "EVALUATION_INIT" | "EVALUATING" | "EVALUATED" | "EVALUATE_FAILED" | "PUBLISH_INIT" | "PUBLISHING" | "PUBLISHED" | "PUBLISH_FAILED";
        /**
         * 训练成功的数量
         */
        successCount?: number; // int32
        /**
         * 训练者
         */
        trainer?: string;
        /**
         * 模型版本
         */
        version?: string;
        /**
         * 模型权限
         */
        visibility?: "PRIVATE" | "GROUP_SHARE" | "PUBLIC";
    }
    /**
     * VersionsListResponse
     */
    export interface VersionsListResponse {
        /**
         * 模型版本列表
         */
        versionModel?: VersionModel[];
    }
    /**
     * WildcardType
     */
    export interface WildcardType {
    }
    /**
     * WorkFlowsDTO
     */
    export interface WorkFlowsDTO {
        created_at?: string; // date-time
        description?: string;
        group_id?: string;
        group_name?: string;
        id?: number; // int32
        memo?: string;
        name?: string;
        title?: string;
        user_id?: string;
        user_name?: string;
        version?: string;
        visibility?: string;
    }
    /**
     * Workflow
     */
    export interface Workflow {
        /**
         * 训练工作流模板信息
         */
        workflowId?: string;
        /**
         * 工作流名称
         */
        workflowName?: string;
        /**
         * 工作流版本号
         */
        workflowVersion?: string;
    }
    /**
     * WorkflowResponse
     */
    export interface WorkflowResponse {
        /**
         * 工作流模板
         */
        workflowList?: Workflow[];
    }
    /**
     * 模型评测记录列表-ReviewRecordResonse
     */
    export interface _ReviewRecordResonse {
        /**
         * 评测记录列表
         */
        modelReviewRecords?: ReviewRecord[];
        /**
         * 总数
         */
        total?: number; // int64
    }
    /**
     * 编辑用户信息
     */
    export interface _ {
        /**
         * 邮箱
         */
        email?: string;
        /**
         * 所属群组序列号
         */
        groupSerial?: string;
        /**
         * 角色
         */
        roleList?: ("SYS_ADMIN" | "GROUP_ADMIN" | "USER" | "LABELER")[];
        /**
         * 电话号码
         */
        telephone?: string;
    }
    /**
     * 评测信息-RecordDetailResponse
     */
    export interface _RecordDetailResponse {
        /**
         * 模型名称
         */
        name?: string;
        /**
         * 评测集名称，多个时以英文逗号分隔
         */
        reviewDatasetNames?: string;
        /**
         * 评测图片分布
         */
        reviewDistribute?: string;
        /**
         * 评测图片总数
         */
        reviewTotals?: number; // int64
        /**
         * 评测版本
         */
        reviewVersions?: string;
        /**
         * 评测记录状态
         */
        status?: "ALL" | "EVALUATING" | "EVALUATED" | "EVALUATE_FAILED";
    }
}
