package com.cleverpine.transactions.controller;

import com.cleverpine.transactions.api.SystemApi;
import com.cleverpine.transactions.model.ApiSystemInfoGet200Response;
import com.cleverpine.transactions.model.InfoHolder;
import org.springframework.boot.info.BuildProperties;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SystemController implements SystemApi {

    private final MessageSource messageSource;

    private final BuildProperties buildProperties;

    public SystemController(MessageSource messageSource, BuildProperties buildProperties) {
        this.messageSource = messageSource;
        this.buildProperties = buildProperties;
    }

    @Override
    public ResponseEntity<String> apiSystemHealthGet() {
        return ResponseEntity.ok(messageSource.getMessage("label.message",null, LocaleContextHolder.getLocale()));
    }

    @Override
    public ResponseEntity<ApiSystemInfoGet200Response> apiSystemInfoGet() {
        return new ResponseEntity<>(
                new ApiSystemInfoGet200Response().data(new InfoHolder()
                        .appBuildversion(buildProperties.getVersion())
                        .appBuildTime(buildProperties.getTime().toString())
                ), HttpStatus.OK);
    }

}
