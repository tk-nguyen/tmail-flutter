import 'dart:io';

import 'package:core/utils/app_logger.dart';
import 'package:equatable/equatable.dart';

class Domain with EquatableMixin {
  static final RegExp _dashMatcher = RegExp(r'[-_]');
  static final RegExp _digitMatcher = RegExp(r'\d');
  static final RegExp _partCharMatcher = RegExp(r'[A-Za-z0-9_\-.]');

  static final Domain localhost = Domain.of('localhost');
  static const int maximumDomainLength = 253;

  static String _removeBrackets(String domainName) {
    if (!(domainName.startsWith('[') && domainName.endsWith(']'))) {
      return domainName;
    }
    return domainName.substring(1, domainName.length - 1);
  }

  static bool _allCharactersMatchRegex(String input, RegExp regex) {
    for (int i = 0; i < input.length; i++) {
      if (!regex.hasMatch(input[i])) {
        return false;
      }
    }
    return true;
  }

  static Domain of(String? domain) {
    assert(domain != null, 'Domain can not be null');
    assert(domain!.isNotEmpty, 'Domain can not be empty');
    assert(domain!.length <= maximumDomainLength, 'Domain name length should not exceed $maximumDomainLength characters');

    String domainWithoutBrackets = _removeBrackets(domain!);
    assert(_allCharactersMatchRegex(domainWithoutBrackets, _partCharMatcher), 'Domain parts ASCII chars must be a-z A-Z 0-9 - or _');

    int pos = 0;
    int nextDot = domainWithoutBrackets.indexOf('.');

    while (nextDot > -1) {
      if (pos + 1 > domainWithoutBrackets.length) {
        throw ArgumentError('Last domain part should not be empty');
      }
      _assertValidPart(domainWithoutBrackets, pos, nextDot);
      pos = nextDot + 1;
      nextDot = domainWithoutBrackets.indexOf('.', pos);
    }
    _assertValidPart(domainWithoutBrackets, pos, domainWithoutBrackets.length);
    _assertValidLastPart(domainWithoutBrackets, pos);

    return Domain._(domainWithoutBrackets);
  }

  static void _assertValidPart(String domainPart, int begin, int end) {
    assert(begin != end, "Domain part should not be empty");
    assert(!_dashMatcher.hasMatch(domainPart[begin]), "Domain part should not start with '-' or '_'");
    assert(!_dashMatcher.hasMatch(domainPart[end - 1]), "Domain part should not end with '-' or '_'");
    assert(end - begin <= 63, "Domain part should not not exceed 63 characters");
  }

  static void _assertValidLastPart(String domainPart, int pos) {
    bool onlyDigits = _digitMatcher.hasMatch(domainPart[pos]);
    bool invalid = onlyDigits && !_validIPAddress(domainPart);
    assert(!invalid, "The last domain part must not start with 0-9");
  }

  static bool _validIPAddress(String value) {
    try {
      InternetAddress(value);
      return true;
    } catch (e) {
      logError('Domain::validIPAddress: Exception = $e');
      return false;
    }
  }

  final String domainName;
  final String normalizedDomainName;

  Domain._(this.domainName) : normalizedDomainName = _removeBrackets(domainName.toLowerCase());

  String name() => domainName;

  String asString() => normalizedDomainName;

  @override
  bool operator ==(Object other) {
    if (other is Domain) {
      return normalizedDomainName == other.normalizedDomainName;
    }
    return false;
  }

  @override
  int get hashCode {
    return normalizedDomainName.hashCode;
  }

  @override
  String toString() {
    return "Domain : $domainName";
  }

  @override
  List<Object?> get props => [domainName];
}