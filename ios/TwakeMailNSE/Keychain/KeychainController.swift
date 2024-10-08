import Foundation
import KeychainAccess

enum KeychainControllerService: String {
    case sessions
    
    var identifier: String {
        InfoPlistReader.main.baseBundleIdentifier + "." + rawValue
    }
}

class KeychainController: KeychainControllerDelegate {
    private let keychain: Keychain
    
    init(service: KeychainControllerService,
         accessGroup: String) {
        keychain = Keychain(service: service.identifier,
                            accessGroup: accessGroup).accessibility(.afterFirstUnlock)
    }
    
    func retrieveSharingSessionFromKeychain(accountId: String) -> KeychainSharingSession? {
        do {
            guard let sessionData = try keychain.getData(accountId) else {
                return nil
            }
            
            return try JSONDecoder().decode(KeychainSharingSession.self, from: sessionData)
        } catch {
            return nil
        }
    }
    
    func retrieveSharingSessions() -> [KeychainCredentials] {
        keychain.allKeys().compactMap { accountId in
            guard let sharingSession = retrieveSharingSessionFromKeychain(accountId: accountId) else {
                return nil
            }

            return KeychainCredentials(accountId: accountId, sharingSession: sharingSession)
        }
    }
    
    func updateEmailDeliveryStateToKeychain(accountId: String, newEmailDeliveryState: String) {
        do {
            if let sharingSession = retrieveSharingSessionFromKeychain(accountId: accountId),
               let newSharingSessionData = sharingSession.updateEmailDeliveryState(newEmailDeliveryState: newEmailDeliveryState).toData() {
                try keychain.set(newSharingSessionData, key: accountId)
            }
        } catch {}
    }
    
    func updateTokenOidc(accountId: String, newTokenOidc: TokenOidc) {
        do {
            if let sharingSession = retrieveSharingSessionFromKeychain(accountId: accountId),
               let newSharingSessionData = sharingSession.updateTokenOidc(newTokenOidc: newTokenOidc).toData() {
                try keychain.set(newSharingSessionData, key: accountId)
            }
        } catch {}
    }
}
