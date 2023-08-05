package com.cleverpine.transactions.config;

import com.cleverpine.cpspringerrorutil.util.GenericResponseEntityUtil;
import com.cleverpine.cpspringerrorutil.util.ListResponseEntityUtil;
import com.cleverpine.cpspringerrorutil.util.ResponseEntityUtil;
import com.cleverpine.transactions.model.TemplateFull;
import com.cleverpine.transactions.model.TemplateListResponse;
import com.cleverpine.transactions.model.TemplateResponse;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ResponseEntityUtilConfig {

    @Bean
    public GenericResponseEntityUtil genericResponseEntityUtil() {
        return new GenericResponseEntityUtil();
    }

    @Bean
    public ResponseEntityUtil<TemplateResponse, TemplateFull> templateResponseEntityUtil() {
        return new ResponseEntityUtil<>(TemplateResponse.class, TemplateFull.class);
    }

    @Bean
    public ListResponseEntityUtil<TemplateListResponse, TemplateFull> templateListResponseEntityUtil() {
        return new ListResponseEntityUtil<>(TemplateListResponse.class, TemplateFull.class);
    }

}
