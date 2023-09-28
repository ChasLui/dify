import type { Fetcher } from 'swr'
import { del, get, patch, post, put } from './base'
import type {
  AccountIntegrate, CommonResponse, DataSourceNotion,
  DocumentsLimitResponse,
  FileUploadConfigResponse,
  ICurrentWorkspace,
  IWorkspace, InvitationResponse, LangGeniusVersionResponse, Member,
  OauthResponse, PluginProvider, Provider, ProviderAnthropicToken, ProviderAzureToken,
  SetupStatusResponse, UserProfileOriginResponse,
} from '@/models/common'
import type {
  UpdateOpenAIKeyResponse,
  ValidateOpenAIKeyResponse,
} from '@/models/app'
import type { BackendModel, ProviderMap } from '@/app/components/header/account-setting/model-page/declarations'

export const login: Fetcher<CommonResponse & { data: string }, { url: string; body: Record<string, any> }> = ({ url, body }) => {
  return post(url, { body }) as Promise<CommonResponse & { data: string }>
}

export const setup: Fetcher<CommonResponse, { body: Record<string, any> }> = ({ body }) => {
  return post<CommonResponse>('/setup', { body })
}

export const fetchSetupStatus = () => {
  return get<SetupStatusResponse>('/setup')
}

export const fetchUserProfile: Fetcher<UserProfileOriginResponse, { url: string; params: Record<string, any> }> = ({ url, params }) => {
  return get<UserProfileOriginResponse>(url, params, { needAllResponseContent: true })
}

export const updateUserProfile: Fetcher<CommonResponse, { url: string; body: Record<string, any> }> = ({ url, body }) => {
  return post<CommonResponse>(url, { body })
}

export const logout: Fetcher<CommonResponse, { url: string; params: Record<string, any> }> = ({ url, params }) => {
  return get<CommonResponse>(url, params)
}

export const fetchLanggeniusVersion: Fetcher<LangGeniusVersionResponse, { url: string; params: Record<string, any> }> = ({ url, params }) => {
  return get<LangGeniusVersionResponse>(url, { params })
}

export const oauth: Fetcher<OauthResponse, { url: string; params: Record<string, any> }> = ({ url, params }) => {
  return get<OauthResponse>(url, { params })
}

export const oneMoreStep: Fetcher<CommonResponse, { url: string; body: Record<string, any> }> = ({ url, body }) => {
  return post<CommonResponse>(url, { body })
}

export const fetchMembers: Fetcher<{ accounts: Member[] | null }, { url: string; params: Record<string, any> }> = ({ url, params }) => {
  return get<{ accounts: Member[] | null }>(url, { params })
}

export const fetchProviders: Fetcher<Provider[] | null, { url: string; params: Record<string, any> }> = ({ url, params }) => {
  return get<Provider[] | null>(url, { params })
}

export const validateProviderKey: Fetcher<ValidateOpenAIKeyResponse, { url: string; body: { token: string } }> = ({ url, body }) => {
  return post<ValidateOpenAIKeyResponse>(url, { body })
}
export const updateProviderAIKey: Fetcher<UpdateOpenAIKeyResponse, { url: string; body: { token: string | ProviderAzureToken | ProviderAnthropicToken } }> = ({ url, body }) => {
  return post<UpdateOpenAIKeyResponse>(url, { body })
}

export const fetchAccountIntegrates: Fetcher<{ data: AccountIntegrate[] | null }, { url: string; params: Record<string, any> }> = ({ url, params }) => {
  return get<{ data: AccountIntegrate[] | null }>(url, { params })
}

export const inviteMember: Fetcher<InvitationResponse, { url: string; body: Record<string, any> }> = ({ url, body }) => {
  return post<InvitationResponse>(url, { body })
}

export const updateMemberRole: Fetcher<CommonResponse, { url: string; body: Record<string, any> }> = ({ url, body }) => {
  return put<CommonResponse>(url, { body })
}

export const deleteMemberOrCancelInvitation: Fetcher<CommonResponse, { url: string }> = ({ url }) => {
  return del<CommonResponse>(url)
}

export const fetchFilePreview: Fetcher<{ content: string }, { fileID: string }> = ({ fileID }) => {
  return get<{ content: string }>(`/files/${fileID}/preview`)
}

export const fetchCurrentWorkspace: Fetcher<ICurrentWorkspace, { url: string; params: Record<string, any> }> = ({ url, params }) => {
  return get<ICurrentWorkspace>(url, { params })
}

export const fetchWorkspaces: Fetcher<{ workspaces: IWorkspace[] }, { url: string; params: Record<string, any> }> = ({ url, params }) => {
  return get<{ workspaces: IWorkspace[] }>(url, { params })
}

export const switchWorkspace: Fetcher<CommonResponse & { new_tenant: IWorkspace }, { url: string; body: Record<string, any> }> = ({ url, body }) => {
  return post<CommonResponse & { new_tenant: IWorkspace }>(url, { body })
}

export const fetchDataSource: Fetcher<{ data: DataSourceNotion[] }, { url: string }> = ({ url }) => {
  return get<{ data: DataSourceNotion[] }>(url)
}

export const syncDataSourceNotion: Fetcher<CommonResponse, { url: string }> = ({ url }) => {
  return get<CommonResponse>(url)
}

export const updateDataSourceNotionAction: Fetcher<CommonResponse, { url: string }> = ({ url }) => {
  return patch<CommonResponse>(url)
}

export const fetchPluginProviders: Fetcher<PluginProvider[] | null, string> = (url) => {
  return get<PluginProvider[] | null>(url)
}

export const validatePluginProviderKey: Fetcher<ValidateOpenAIKeyResponse, { url: string; body: { credentials: any } }> = ({ url, body }) => {
  return post<ValidateOpenAIKeyResponse>(url, { body })
}
export const updatePluginProviderAIKey: Fetcher<UpdateOpenAIKeyResponse, { url: string; body: { credentials: any } }> = ({ url, body }) => {
  return post<UpdateOpenAIKeyResponse>(url, { body })
}

export const invitationCheck: Fetcher<CommonResponse & { is_valid: boolean; workspace_name: string }, { url: string; params: { workspace_id: string; email: string; token: string } }> = ({ url, params }) => {
  return get<CommonResponse & { is_valid: boolean; workspace_name: string }>(url, { params })
}

export const activateMember: Fetcher<CommonResponse, { url: string; body: any }> = ({ url, body }) => {
  return post<CommonResponse>(url, { body })
}

export const fetchModelProviders: Fetcher<ProviderMap, string> = (url) => {
  return get<ProviderMap>(url)
}

export const fetchModelList: Fetcher<BackendModel[], string> = (url) => {
  return get<BackendModel[]>(url)
}

export const validateModelProvider: Fetcher<ValidateOpenAIKeyResponse, { url: string; body: any }> = ({ url, body }) => {
  return post<ValidateOpenAIKeyResponse>(url, { body })
}

export const setModelProvider: Fetcher<CommonResponse, { url: string; body: any }> = ({ url, body }) => {
  return post<CommonResponse>(url, { body })
}

export const deleteModelProvider: Fetcher<CommonResponse, { url: string }> = ({ url }) => {
  return del<CommonResponse>(url)
}

export const changeModelProviderPriority: Fetcher<CommonResponse, { url: string; body: any }> = ({ url, body }) => {
  return post<CommonResponse>(url, { body })
}

export const setModelProviderModel: Fetcher<CommonResponse, { url: string; body: any }> = ({ url, body }) => {
  return post<CommonResponse>(url, { body })
}

export const deleteModelProviderModel: Fetcher<CommonResponse, { url: string }> = ({ url }) => {
  return del<CommonResponse>(url)
}

export const getPayUrl: Fetcher<{ url: string }, string> = (url) => {
  return get<{ url: string }>(url)
}

export const fetchDefaultModal: Fetcher<BackendModel, string> = (url) => {
  return get<BackendModel>(url)
}

export const updateDefaultModel: Fetcher<CommonResponse, { url: string; body: any }> = ({ url, body }) => {
  return post<CommonResponse>(url, { body })
}

export const submitFreeQuota: Fetcher<{ type: string; redirect_url?: string; result?: string }, string> = (url) => {
  return post<{ type: string; redirect_url?: string; result?: string }>(url)
}

export const fetchFileUploadConfig: Fetcher<FileUploadConfigResponse, { url: string }> = ({ url }) => {
  return get<FileUploadConfigResponse>(url)
}

export const fetchDocumentsLimit: Fetcher<DocumentsLimitResponse, string> = (url) => {
  return get<DocumentsLimitResponse>(url)
}

export const fetchFreeQuotaVerify: Fetcher<{ result: string; flag: boolean; reason: string }, string> = (url) => {
  return get(url) as Promise<{ result: string; flag: boolean; reason: string }>
}

export const fetchNotionConnection: Fetcher<{ data: string }, string> = (url) => {
  return get(url) as Promise<{ data: string }>
}

export const fetchDataSourceNotionBinding: Fetcher<{ result: string }, string> = (url) => {
  return get(url) as Promise<{ result: string }>
}
